// Pirc Macroclass offline cache
var CACHE = 'macroclass-d26d33205a94';
var FILES = ['./'].concat(["audio/by0-0d833ad6a9.mp3", "audio/by1-bb3dc38f5a.mp3", "audio/by10-273abeceb7.mp3", "audio/by11-1cccfbaebc.mp3", "audio/by12-a035fdc52f.mp3", "audio/by13-a8993e4ef7.mp3", "audio/by14-139e7c2adc.mp3", "audio/by15-b292437a9e.mp3", "audio/by16-25867ef206.mp3", "audio/by2-2210dd1a62.mp3", "audio/by3-ae4ff387c9.mp3", "audio/by4-02a845b65b.mp3", "audio/by5-d3877fce79.mp3", "audio/by6-e6ac27d2bf.mp3", "audio/by7-b8775909e8.mp3", "audio/by8-7289a4fa6c.mp3", "audio/by9-5b6dc2fd00.mp3", "audio/ch0-ac00ce8bb4.mp3", "audio/ch1-3b91ba49fa.mp3", "audio/ch10-e45066c488.mp3", "audio/ch11-4efb38ce10.mp3", "audio/ch12-fa59e73ed9.mp3", "audio/ch13-66f15b0b36.mp3", "audio/ch2-30e6da065d.mp3", "audio/ch3-316cc8648a.mp3", "audio/ch4-0444da4671.mp3", "audio/ch5-a66ce39ab7.mp3", "audio/ch6-dbf247d51f.mp3", "audio/ch7-8a893ee20c.mp3", "audio/ch8-90230977bd.mp3", "audio/ch9-91af751b39.mp3", "fonts/cormorant-italic.ttf", "fonts/fonts.css", "fonts/inter-400.otf", "fonts/inter-500.otf", "fonts/inter-600.otf", "fonts/inter-700.otf", "fonts/inter-800.otf", "fonts/jetbrainsmono.ttf", "fonts/manrope.ttf", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/favicon-64.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png", "index.html", "manifest.webmanifest"]);
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
  if (req.mode === 'navigate') {
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
