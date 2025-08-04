const CACHE_NAME = "a2z-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./css/home.css",
  "./js/home.js",
  "./js/navbar.js",
  "./images/logo.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(cacheNames.map((cache) => cache !== CACHE_NAME && caches.delete(cache)))
    )
  );
});
