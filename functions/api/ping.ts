export const onRequest: PagesFunction = async () => {
  try {
    return new Response(JSON.stringify({ ok: true, ts: new Date().toISOString() }), {
      status: 200,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: err?.message || 'unknown' }), {
      status: 500,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
    });
  }
};

