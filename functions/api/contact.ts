export async function onRequest({ request }: { request: Request }) {
  const url = new URL(request.url);
  const debug = url.searchParams.get('debug') === '1';
  const dry = url.searchParams.get('dry') === '1';
  const steps: string[] = [];
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ ok: false, error: 'Method not allowed' }), {
      status: 405,
      headers: { 'content-type': 'application/json' }
    });
  }
  try {
    steps.push('begin');
    const data = (await request.json()) as {
      company?: string;
      tel?: string;
      email?: string;
      message?: string;
    };
    steps.push('parsed');
    const company = (data.company || '').toString().trim();
    const tel = (data.tel || '').toString().trim();
    const email = (data.email || '').toString().trim();
    const message = (data.message || '').toString().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid email' }), {
        status: 400,
        headers: { 'content-type': 'application/json' }
      });
    }

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#0f172a;">
        <h2 style="margin:0 0 12px;">Ny kontaktförfrågan via webbplatsen</h2>
        <p style="margin:0 0 16px;">Följande uppgifter skickades in:</p>
        <table style="border-collapse:collapse; width:100%; max-width:640px;">
          <tbody>
            <tr><td style="padding:6px 8px; background:#f1f5f9; width:160px;">Företag</td><td style="padding:6px 8px;">${escapeHtml(company) || '—'}</td></tr>
            <tr><td style="padding:6px 8px; background:#f1f5f9;">Telefon</td><td style="padding:6px 8px;">${escapeHtml(tel) || '—'}</td></tr>
            <tr><td style="padding:6px 8px; background:#f1f5f9;">E‑post</td><td style="padding:6px 8px;">${escapeHtml(email)}</td></tr>
          </tbody>
        </table>
        <h3 style="margin:18px 0 8px;">Meddelande</h3>
        <div style="white-space:pre-wrap; padding:10px 12px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">${escapeHtml(message) || '—'}</div>
        <p style="margin:16px 0 0; color:#475569; font-size:13px;">Skickad från yntra.se kontaktmodal.</p>
      </div>
    `;

    const text = `Ny kontaktförfrågan via webbplatsen\n\n` +
      `Företag: ${company || '—'}\n` +
      `Telefon: ${tel || '—'}\n` +
      `E‑post: ${email}\n\n` +
      `Meddelande:\n${message || '—'}\n`;

    const payload = {
      personalizations: [
        { to: [{ email: 'contact@yntra.se', name: 'Yntra Contact' }, { email }] }
      ],
      from: { email: 'no-reply@yntra.se', name: 'Yntra Website' },
      reply_to: { email },
      subject: `Ny kontakt: ${company || email}`,
      content: [
        { type: 'text/html', value: html },
        { type: 'text/plain', value: text }
      ]
    } as const;
    steps.push('built');

    if (dry) {
      return new Response(JSON.stringify({ ok: true, mode: 'dry', steps, payload }), {
        status: 200,
        headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
      });
    }

    const mcRes = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload)
    });
    steps.push('sent');
    if (!mcRes.ok) {
      const body = await mcRes.text().catch(() => '');
      if (debug) {
        return new Response(JSON.stringify({ ok: false, steps, mcStatus: mcRes.status, details: body }), {
          status: 200,
          headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
        });
      } else {
        return new Response(JSON.stringify({ ok: false, error: 'Email send failed' }), {
          status: 502,
          headers: { 'content-type': 'application/json' }
        });
      }
    }
    if (debug) {
      const body = await mcRes.text().catch(() => '');
      return new Response(JSON.stringify({ ok: true, steps, mcStatus: mcRes.status, details: body }), {
        status: 200,
        headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
      });
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    });
  } catch (err: any) {
    const message = (err && (err.message || String(err))) || 'Unexpected error';
    if (debug) {
      return new Response(JSON.stringify({ ok: false, steps, error: message }), {
        status: 200,
        headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
      });
    }
    return new Response(JSON.stringify({ ok: false, error: message }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    });
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
