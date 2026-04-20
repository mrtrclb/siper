// Siper Service Worker v1.5.0
// Bump CACHE_VERSION on each deploy to invalidate old caches.
const CACHE_VERSION = 'siper-v1.5.0';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  // Music (optional — will be cached if present, ignored if missing)
  './music1.mp3',
  './music2.mp3',
  './music3.mp3',
  // Icons (optional)
  './icon-192.png',
  './icon-512.png',
  './og-image.png'
];

// Install: pre-cache core assets. Use individual add() so missing files don't break the install.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return Promise.all(
        CORE_ASSETS.map((url) =>
          cache.add(url).catch(() => {
            // silently ignore missing optional assets (music, icons)
          })
        )
      );
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: stale-while-revalidate for same-origin GET, network-first for Firebase
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Never cache Firebase API calls
  if (
    url.hostname.includes('firebaseio.com') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('gstatic.com')
  ) {
    event.respondWith(fetch(req).catch(() => new Response('', { status: 504 })));
    return;
  }

  // Same-origin: cache-first, then network fallback, then cached index
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

  // Cross-origin: pass through
  event.respondWith(fetch(req).catch(() => new Response('', { status: 504 })));
});
