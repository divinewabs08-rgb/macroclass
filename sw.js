// Kyros offline cache (the cache keeps its old internal name so older copies are cleared)
var CACHE = 'macroclass-0c2f34447dd6';
var FILES = ['./'].concat(["audio/by0-148ba7c7a3.mp3", "audio/by1-bb3dc38f5a.mp3", "audio/by10-273abeceb7.mp3", "audio/by11-9d190ec188.mp3", "audio/by12-a035fdc52f.mp3", "audio/by13-75f3ce0c9f.mp3", "audio/by14-139e7c2adc.mp3", "audio/by15-b292437a9e.mp3", "audio/by16-a723a45ef4.mp3", "audio/by2-2210dd1a62.mp3", "audio/by3-ae4ff387c9.mp3", "audio/by4-02a845b65b.mp3", "audio/by5-d3877fce79.mp3", "audio/by6-e6ac27d2bf.mp3", "audio/by7-b8775909e8.mp3", "audio/by8-7289a4fa6c.mp3", "audio/by9-5b6dc2fd00.mp3", "audio/ch0-ac00ce8bb4.mp3", "audio/ch1-3b91ba49fa.mp3", "audio/ch10-e45066c488.mp3", "audio/ch11-4efb38ce10.mp3", "audio/ch12-fa59e73ed9.mp3", "audio/ch13-66f15b0b36.mp3", "audio/ch2-30e6da065d.mp3", "audio/ch3-316cc8648a.mp3", "audio/ch4-0444da4671.mp3", "audio/ch5-a66ce39ab7.mp3", "audio/ch6-dbf247d51f.mp3", "audio/ch7-8a893ee20c.mp3", "audio/ch8-90230977bd.mp3", "audio/ch9-91af751b39.mp3", "audio/sm0-70112ceaf0.mp3", "audio/sm1-1574adabc5.mp3", "audio/sm10-1ae8c1626d.mp3", "audio/sm11-b78319405d.mp3", "audio/sm12-037af8479c.mp3", "audio/sm13-0e9da7311d.mp3", "audio/sm14-a6b6c0a97e.mp3", "audio/sm15-29876a10bf.mp3", "audio/sm16-cdcaa689b7.mp3", "audio/sm17-7745c50387.mp3", "audio/sm18-58227b65f4.mp3", "audio/sm2-bc48de5564.mp3", "audio/sm3-932b8a2eea.mp3", "audio/sm4-ba71d73029.mp3", "audio/sm5-40c613f7e2.mp3", "audio/sm6-d32d6db60a.mp3", "audio/sm7-78b0dffe85.mp3", "audio/sm8-fd765298be.mp3", "audio/sm9-21028b910e.mp3", "fonts/cormorant-italic.ttf", "fonts/fonts.css", "fonts/inter-400.otf", "fonts/inter-500.otf", "fonts/inter-600.otf", "fonts/inter-700.otf", "fonts/inter-800.otf", "fonts/jetbrainsmono.ttf", "fonts/manrope.ttf", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/favicon-64.png", "icons/icon-192.png", "icons/icon-512.png", "icons/logo-256.png", "icons/maskable-192.png", "icons/maskable-512.png", "index.html", "manifest.webmanifest", "media/intro-end.jpg", "stockfish-19-lite-single.js", "stockfish-19-lite-single.wasm"]);
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
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
  if (/\.mp4$/i.test(url.pathname)) return;   // video streams straight from the network (range requests)
  if (req.mode === 'navigate') {
    if (url.pathname !== root && url.pathname !== root + 'index.html') return;
    e.respondWith(caches.match('index.html', { cacheName: CACHE }).then(function (r) { return r || fetch(req); }));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(function (r) {
    return r || fetch(req).then(function (resp) {
      if (resp && resp.ok && resp.type === 'basic') { var copy = resp.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return resp;
    });
  }));
});
