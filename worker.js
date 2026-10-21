// 桃園機場即時航班代理（Cloudflare Worker）
// 官方檔是 Big5、沒有開 CORS、一次約 550 KB。這裡只代抓並刪掉 3 小時前的班次，結果快取 60 秒；
// 不解碼，原樣以 Big5 交給看板，由瀏覽器解碼（免費方案每次請求只有 10 ms CPU）。
// /api/flights 以外的路徑交給 ./public 的靜態檔（看板本身）。
const SOURCE = 'https://www.taoyuan-airport.com/uploads/flightx/a_flight_v4.txt';
const KEEP_PAST = 3 * 3600e3;
const CORS = { 'access-control-allow-origin': '*' };

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/flights') return env.ASSETS.fetch(request);
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method Not Allowed', { status: 405, headers: { allow: 'GET, HEAD' } });
    }
    const key = new Request(url.origin + '/api/flights');
    const hit = await caches.default.match(key);
    if (hit) return request.method === 'HEAD' ? new Response(null, hit) : hit;
    try {
      const up = await fetch(SOURCE, { headers: { 'user-agent': 'flight-board-worker' } });
      if (!up.ok) return fail(`官方資料回應 HTTP ${up.status}`);
      const body = slim(new Uint8Array(await up.arrayBuffer()), Date.now());
      if (!body.length) return fail('官方資料是空的');
      const res = new Response(body, {
        headers: {
          ...CORS,
          'content-type': 'text/plain; charset=big5',
          'cache-control': 'public, max-age=60',
          'x-data-time': up.headers.get('last-modified') || ''
        }
      });
      ctx.waitUntil(caches.default.put(key, res.clone()));
      return request.method === 'HEAD' ? new Response(null, res) : res;
    } catch (e) {
      return fail(e && e.message ? e.message : String(e));
    }
  }
};

// 直接在 Big5 位元組上過濾：Big5 的中文字不會出現 0x2C（逗號）或 0x0A（換行），
// 第 6–9 欄的表訂／預計日期時間是固定格式的 ASCII（2026/10/21,08:05:00），可以逐位元組比大小。
export function slim(b, now) {
  const cut = new TextEncoder().encode(tpeStamp(now - KEEP_PAST)), parts = [];
  let size = 0;
  for (let s = 0; s < b.length;) {
    let e = b.indexOf(10, s);
    if (e < 0) e = b.length;
    let i = s, n = 0;
    while (i < e && n < 6) if (b[i++] === 44) n++;
    if (n === 6 && (notBefore(b, i, cut) || notBefore(b, i + 20, cut))) { parts.push(b.subarray(s, e)); size += e - s + 1; }
    s = e + 1;
  }
  const out = new Uint8Array(size);
  let o = 0;
  for (const p of parts) { out.set(p, o); o += p.length; out[o++] = 10; }
  return out;
}

function notBefore(b, i, cut) {
  for (let k = 0; k < cut.length; k++) { const d = b[i + k] - cut[k]; if (d) return d > 0; }
  return true;
}

function tpeStamp(ms) {
  const d = new Date(ms + 8 * 3600e3), p = n => String(n).padStart(2, '0'); // 台北 UTC+8，無日光節約
  return `${d.getUTCFullYear()}/${p(d.getUTCMonth() + 1)}/${p(d.getUTCDate())},${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())}`;
}

function fail(msg) {
  return new Response(JSON.stringify({ error: msg }), { status: 502, headers: { ...CORS, 'content-type': 'application/json; charset=utf-8' } });
}
