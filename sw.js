// Kyros offline cache (the cache keeps its old internal name so older copies are cleared)
var CACHE = 'macroclass-c1967553c610';
var FILES = ['./'].concat(["audio/by0-148ba7c7a3.mp3", "audio/by1-bb3dc38f5a.mp3", "audio/by10-273abeceb7.mp3", "audio/by11-9d190ec188.mp3", "audio/by12-a035fdc52f.mp3", "audio/by13-75f3ce0c9f.mp3", "audio/by14-139e7c2adc.mp3", "audio/by15-b292437a9e.mp3", "audio/by16-a723a45ef4.mp3", "audio/by2-2210dd1a62.mp3", "audio/by3-ae4ff387c9.mp3", "audio/by4-02a845b65b.mp3", "audio/by5-d3877fce79.mp3", "audio/by6-e6ac27d2bf.mp3", "audio/by7-b8775909e8.mp3", "audio/by8-7289a4fa6c.mp3", "audio/by9-5b6dc2fd00.mp3", "audio/ch0-ac00ce8bb4.mp3", "audio/ch1-3b91ba49fa.mp3", "audio/ch10-e45066c488.mp3", "audio/ch11-4efb38ce10.mp3", "audio/ch12-fa59e73ed9.mp3", "audio/ch13-66f15b0b36.mp3", "audio/ch2-30e6da065d.mp3", "audio/ch3-316cc8648a.mp3", "audio/ch4-0444da4671.mp3", "audio/ch5-a66ce39ab7.mp3", "audio/ch6-dbf247d51f.mp3", "audio/ch7-8a893ee20c.mp3", "audio/ch8-90230977bd.mp3", "audio/ch9-91af751b39.mp3", "audio/sm0-70112ceaf0.mp3", "audio/sm1-1574adabc5.mp3", "audio/sm10-1ae8c1626d.mp3", "audio/sm11-b78319405d.mp3", "audio/sm12-037af8479c.mp3", "audio/sm13-0e9da7311d.mp3", "audio/sm14-a6b6c0a97e.mp3", "audio/sm15-29876a10bf.mp3", "audio/sm16-cdcaa689b7.mp3", "audio/sm17-7745c50387.mp3", "audio/sm18-58227b65f4.mp3", "audio/sm2-bc48de5564.mp3", "audio/sm3-932b8a2eea.mp3", "audio/sm4-ba71d73029.mp3", "audio/sm5-40c613f7e2.mp3", "audio/sm6-d32d6db60a.mp3", "audio/sm7-78b0dffe85.mp3", "audio/sm8-fd765298be.mp3", "audio/sm9-21028b910e.mp3", "fonts/cormorant-italic.ttf", "fonts/fonts.css", "fonts/inter-400.otf", "fonts/inter-500.otf", "fonts/inter-600.otf", "fonts/inter-700.otf", "fonts/inter-800.otf", "fonts/jetbrainsmono.ttf", "fonts/manrope.ttf", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/favicon-64.png", "icons/icon-192.png", "icons/icon-512.png", "icons/logo-256.png", "icons/maskable-192.png", "icons/maskable-512.png", "index.html", "manifest.webmanifest", "media/banner-ref.png", "media/bb-bg.jpg", "media/bb-board.jpg", "media/bb-frame.png", "media/board-marble.jpg", "media/board-seams.png", "media/frame-ref.png", "media/intro-1c17b7ed75.mp4", "media/intro-end-4c77bc925b.jpg", "media/intro-loop-aeac4140e9.mp4", "media/intro-splash-9e3c5b0e30.jpg", "media/pieces/bB.webp", "media/pieces/bK.webp", "media/pieces/bN.webp", "media/pieces/bP.webp", "media/pieces/bQ.webp", "media/pieces/bR.webp", "media/pieces/sB.webp", "media/pieces/sK.webp", "media/pieces/sN.webp", "media/pieces/sP.webp", "media/pieces/sQ.webp", "media/pieces/sR.webp", "media/pieces/wB.webp", "media/pieces/wK.webp", "media/pieces/wN.webp", "media/pieces/wP.webp", "media/pieces/wQ.webp", "media/pieces/wR.webp", "media/ribbon-ref.png", "media/sky.jpg", "stockfish-19-lite-single.js", "stockfish-19-lite-single.wasm"]);
self.addEventListener('install', function (e) {
  // cache: 'reload' skips the browser's HTTP cache, so a new version never stores a stale copy of a file
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES.map(function (f) { return new Request(f, { cache: 'reload' }); })); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('macroclass-') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  var root = new URL(self.registration.scope).pathname;
  if (url.pathname.indexOf(root + 'intro/') === 0 || url.pathname === root + 'intro') return;   // the intro site is not part of the app
  if (/\.mp4$/i.test(url.pathname)) {   // the films play from the cache, a byte range at a time, so they replay with no connection
    e.respondWith(caches.match(url.href, { ignoreSearch: true, cacheName: CACHE }).then(function (r) {
      if (!r) return fetch(req);
      var range = req.headers.get('range');
      if (!range) return r;
      return r.blob().then(function (blob) {
        var size = blob.size, m = /^bytes=(\d*)-(\d*)/.exec(range.trim()), a, z;
        if (!m || (m[1] === '' && m[2] === '')) return new Response(blob, { status: 200, headers: { 'Content-Type': 'video/mp4', 'Content-Length': String(size), 'Accept-Ranges': 'bytes' } });
        if (m[1] === '') { a = Math.max(0, size - parseInt(m[2], 10)); z = size - 1; }
        else { a = parseInt(m[1], 10); z = m[2] === '' ? size - 1 : Math.min(parseInt(m[2], 10), size - 1); }
        if (a >= size || a > z) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + size } });
        return new Response(blob.slice(a, z + 1), { status: 206, statusText: 'Partial Content', headers: {
          'Content-Type': 'video/mp4', 'Content-Range': 'bytes ' + a + '-' + z + '/' + size, 'Content-Length': String(z - a + 1), 'Accept-Ranges': 'bytes' } });
      });
    }).catch(function () { return fetch(req); }));
    return;
  }
  if (req.mode === 'navigate') {
    if (url.pathname !== root && url.pathname !== root + 'index.html') return;
    e.respondWith(caches.match('index.html', { cacheName: CACHE }).then(function (r) { return r || fetch(req); }));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(function (r) {
    return r || fetch(req).then(function (resp) {
      if (resp && resp.status === 200 && resp.type === 'basic') { var copy = resp.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return resp;
    });
  }));
});
