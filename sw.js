const self = this;
const filesToCache = [
  "./",
  "./style.css",
  "./icons/logo.png",
  "./icons/splash.png",
  "./script.js"
]
const CACHE = "static"

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});