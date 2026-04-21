// Siper Service Worker
// NOT: Bu versiyonu index.html içindeki GAME_VERSION ile aynı tut.
const CACHE_VERSION = 'siper-v2.6.2';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon-32.png',
  './og-image.png',
  './music1.mp3',
  './music2.mp3',
  './music3.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return Promise.all(
        CORE_ASSETS.map((url) =>
          cache.add(url).catch(() => { /* silently ignore missing */ })
        )
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Never cache Firebase
  if (url.hostname.includes('firebaseio.com') ||
      url.hostname.includes('googleapis.com') ||
      url.hostname.includes('gstatic.com') ||
      url.hostname.includes('firebasedatabase.app')) {
    event.respondWith(fetch(req).catch(() => new Response('', { status: 504 })));
    return;
  }

  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const fetchPromise = fetch(req)
          .then((resp) => {
            if (resp && resp.status === 200 && resp.type === 'basic') {
              const clone = resp.clone();
              caches.open(CACHE_VERSION).then((c) => c.put(req, clone));
            }
            return resp;
          })
          .catch(() => cached || caches.match('./index.html'));
        return cached || fetchPromise;
      })
    );
    return;
  }

  event.respondWith(fetch(req).catch(() => new Response('', { status: 504 })));
});
