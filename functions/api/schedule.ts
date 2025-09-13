export async function onRequestPost({ request }: { request: Request }) {
  try {
    const data = (await request.json()) as {
      length: number;
      type: 'meet' | 'zoom' | 'phone';
      timezone: string;
      dateISO: string; // ISO string
      name: string;
      email: string;
      company?: string;
      tel?: string;
      notes?: string;
    };

    const name = (data.name || '').toString().trim();
    const email = (data.email || '').toString().trim();
    const company = (data.company || '').toString().trim();
    const tel = (data.tel || '').toString().trim();
    const notes = (data.notes || '').toString().trim();
    const dateISO = (data.dateISO || '').toString().trim();
    const type = (data.type || 'meet').toString();
    const length = Number(data.length || 30);
    const timezone = (data.timezone || 'UTC').toString();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid email' }), {
        status: 400,
        headers: { 'content-type': 'application/json' }
      });
    }
    if (!dateISO || isNaN(Date.parse(dateISO))) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid date' }), {
        status: 400,
        headers: { 'content-type': 'application/json' }
      });
    }

    const dateLocal = new Date(dateISO);
    const dateReadable = dateLocal.toLocaleString('sv-SE', {
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#0f172a;">
        <h2 style="margin:0 0 12px;">Ny samtalsbokning</h2>
        <p style="margin:0 0 16px;">En användare har bokat ett samtal.</p>
        <table style="border-collapse:collapse; width:100%; max-width:640px;">
          <tbody>
            <tr><td style="padding:6px 8px; background:#f1f5f9; width:160px;">Namn</td><td style="padding:6px 8px;">${escapeHtml(name) || '—'}</td></tr>
            <tr><td style="padding:6px 8px; background:#f1f5f9;">E‑post</td><td style="padding:6px 8px;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:6px 8px; background:#f1f5f9;">Företag</td><td style="padding:6px 8px;">${escapeHtml(company) || '—'}</td></tr>
            <tr><td style="padding:6px 8px; background:#f1f5f9;">Telefon</td><td style="padding:6px 8px;">${escapeHtml(tel) || '—'}</td></tr>
            <tr><td style="padding:6px 8px; background:#f1f5f9;">Längd</td><td style="padding:6px 8px;">${length} min</td></tr>
            <tr><td style="padding:6px 8px; background:#f1f5f9;">Typ</td><td style="padding:6px 8px;">${escapeHtml(type)}</td></tr>
            <tr><td style="padding:6px 8px; background:#f1f5f9;">Tidszon</td><td style="padding:6px 8px;">${escapeHtml(timezone)}</td></tr>
            <tr><td style="padding:6px 8px; background:#f1f5f9;">Tid</td><td style="padding:6px 8px;">${escapeHtml(dateReadable)}</td></tr>
          </tbody>
        </table>
        <h3 style="margin:18px 0 8px;">Anteckningar</h3>
        <div style="white-space:pre-wrap; padding:10px 12px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">${escapeHtml(notes) || '—'}</div>
        <p style="margin:16px 0 0; color:#475569; font-size:13px;">Skickad från yntra.se boka‑samtal modal.</p>
      </div>
    `;

    const text = `Ny samtalsbokning\n\n` +
      `Namn: ${name || '—'}\n` +
      `E‑post: ${email}\n` +
      `Företag: ${company || '—'}\n` +
      `Telefon: ${tel || '—'}\n` +
      `Längd: ${length} min\n` +
      `Typ: ${type}\n` +
      `Tidszon: ${timezone}\n` +
      `Tid: ${dateReadable}\n\n` +
      `Anteckningar:\n${notes || '—'}\n`;

    const payload = {
      personalizations: [
        { to: [{ email: 'contact@yntra.se', name: 'Yntra Contact' }, { email }] }
      ],
      from: { email: 'no-reply@yntra.se', name: 'Yntra Website' },
      reply_to: { email },
      subject: `Bokning: ${name || company || email}`,
      content: [
        { type: 'text/html', value: html },
        { type: 'text/plain', value: text }
      ]
    } as const;

    const mcRes = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!mcRes.ok) {
      const body = await mcRes.text().catch(() => '');
      return new Response(JSON.stringify({ ok: false, error: 'Email send failed', details: body }), {
        status: 502,
        headers: { 'content-type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: err?.message || 'Unexpected error' }), {
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
