export async function onRequest({ request, env }: { request: Request; env: Record<string, string | undefined> }) {
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

    const data = (await request.json()) as Record<string, unknown>;

    const kind: 'contact' | 'schedule' = ('dateISO' in data) || ('type' in data) ? 'schedule' : 'contact';
    const nowIso = new Date().toISOString();

    const fields: Array<{ name: string; value: string; inline?: boolean }> = [];
    function add(name: string, value: unknown, inline = false) {
      const v = (value ?? '').toString().trim();
      if (v) fields.push({ name, value: v, inline });
    }

    if (kind === 'contact') {
      add('FÃ¶retag', data['company'] ?? 'â€”', true);
      add('Eâ€‘post', data['email'] ?? 'â€”', true);
      add('Telefon', data['tel'] ?? 'â€”', true);
      add('Meddelande', data['message'] ?? 'â€”');
    } else {
      add('Namn', data['name'] ?? 'â€”', true);
      add('Eâ€‘post', data['email'] ?? 'â€”', true);
      add('FÃ¶retag', data['company'] ?? 'â€”', true);
      add('Telefon', data['tel'] ?? 'â€”', true);
      add('Typ', data['type'] ?? 'â€”', true);
      add('Tidszon', data['timezone'] ?? 'â€”', true);
      add('Tid (ISO)', data['dateISO'] ?? 'â€”');
      add('Anteckningar', data['notes'] ?? 'â€”');
    }

    const title = kind === 'contact' ? 'Ny kontaktfÃ¶rfrÃ¥gan' : 'Ny samtalsbokning';
    const color = kind === 'contact' ? 0x3b82f6 : 0x8b5cf6;

    const embed = {
      title,
      color,
      timestamp: nowIso,
      fields: fields.length ? fields : [{ name: 'Info', value: 'Inget innehÃ¥ll' }]
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
  } catch (err: unknown) {
    const message = getErrorMessage(err);
    return new Response(JSON.stringify({ ok: false, error: message }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    });
  }
}

function getErrorMessage(err: unknown): string {
  if (typeof err === 'object' && err !== null && 'message' in err) {
    const m = (err as { message?: unknown }).message;
    return typeof m === 'string' ? m : String(m ?? 'Unexpected error');
  }
  return 'Unexpected error';
}