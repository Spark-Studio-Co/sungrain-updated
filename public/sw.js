const CACHE_NAME = "sungrain-cache-v2";

// Assets to cache
const ASSETS_TO_CACHE = [
  "/",
  "/favicon.svg",
  "/og-image.jpg",
  "/fonts/unisans.woff2",
  "/fonts/montserrat.woff2",
  "/images/**/*",
  "/styles/**/*",
  "/scripts/**/*",
];

// Dynamic cache for other resources
const DYNAMIC_CACHE = "sungrain-dynamic-v1";

// Install event - cache core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate event - cleanup old caches
self.addEventListener("activate", (event) => {
  const currentCaches = [CACHE_NAME, DYNAMIC_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!currentCaches.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event with network-first strategy for API calls and cache-first for assets
self.addEventListener("fetch", (event) => {
  // Handle API calls
  if (event.request.url.includes("/api/")) {
    return event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }

  // Handle static assets
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((response) => {
          // Check if we received a valid response
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          // Cache the new resource in dynamic cache
          const responseToCache = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            if (event.request.method === "GET") {
              cache.put(event.request, responseToCache);
            }
          });

          return response;
        })
        .catch(() => {
          // Return offline fallback if available
          if (event.request.mode === "navigate") {
            return caches.match("/offline.html");
          }
        });
    })
  );
});

// Handle background sync for forms
self.addEventListener("sync", (event) => {
  if (event.tag === "contact-form-sync") {
    event
      .waitUntil
      // Process queued form submissions
      // Add your form sync logic here
      ();
  }
});
