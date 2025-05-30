const CACHE_NAME = 'ostrich-grill-v1';
const urlsToCache = [
  '/Ostrich-bistro/',
  '/Ostrich-bistro/index.html',
  '/Ostrich-bistro/menu.html',
  '/Ostrich-bistro/icons/icon-192.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
