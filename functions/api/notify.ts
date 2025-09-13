export async function onRequest({ request, env }: { request: Request; env: any }) {
  const url = new URL(request.url);
  const debug = url.searchParams.get('debug') === '1';
  const dry = url.searchParams.get('dry') === '1';

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ ok: false, error: 'Method not allowed' }), {
      status: 405,
      headers: { 'content-type': 'application/json' }
    });
  }

  try {
    const hook = env?.DISCORD_WEBHOOK as string | undefined;
    if (!hook) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing DISCORD_WEBHOOK env' }), {
        status: 500,
        headers: { 'content-type': 'application/json' }
      });
    }

    const data = (await request.json()) as any;

    const kind: 'contact' | 'schedule' = data?.dateISO || data?.type ? 'schedule' : 'contact';
    const nowIso = new Date().toISOString();

    const fields: Array<{ name: string; value: string; inline?: boolean }> = [];
    function add(name: string, value: unknown, inline = false) {
      const v = (value ?? '').toString().trim();
      if (v) fields.push({ name, value: v, inline });
    }

    if (kind === 'contact') {
      add('Företag', data?.company || '—', true);
      add('E‑post', data?.email || '—', true);
      add('Telefon', data?.tel || '—', true);
      add('Meddelande', data?.message || '—');
    } else {
      add('Namn', data?.name || '—', true);
      add('E‑post', data?.email || '—', true);
      add('Företag', data?.company || '—', true);
      add('Telefon', data?.tel || '—', true);
      add('Typ', data?.type || '—', true);
      add('Längd', (data?.length ? `${data.length} min` : '—'), true);
      add('Tidszon', data?.timezone || '—', true);
      add('Tid (ISO)', data?.dateISO || '—');
      add('Anteckningar', data?.notes || '—');
    }

    const title = kind === 'contact' ? 'Ny kontaktförfrågan' : 'Ny samtalsbokning';
    const color = kind === 'contact' ? 0x3b82f6 : 0x8b5cf6; // blue / violet

    const embed = {
      title,
      color,
      timestamp: nowIso,
      fields: fields.length ? fields : [{ name: 'Info', value: 'Inget innehåll' }]
    } as const;

    const payload = {
      username: 'Yntra Website',
      avatar_url: `${url.origin}/images/YntraBLACK_LOGO.png`,
      content: null,
      embeds: [embed],
      allowed_mentions: { parse: [] }
    } as const;

    if (dry) {
      return new Response(JSON.stringify({ ok: true, mode: 'dry', payload }, null, 2), {
        status: 200,
        headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
      });
    }

    const res = await fetch(hook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const body = await res.text().catch(() => '');
    if (!res.ok) {
      const out = { ok: false, status: res.status, details: body };
      return new Response(JSON.stringify(out), {
        status: debug ? 200 : 502,
        headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
      });
    }

    const out = { ok: true, status: res.status, details: body || 'Sent' };
    return new Response(JSON.stringify(out), {
      status: 200,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: err?.message || 'Unexpected error' }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    });
  }
}

