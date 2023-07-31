import { clientsClaim } from "workbox-core";
import { matchPrecache, precacheAndRoute } from "workbox-precaching";
import { registerRoute, setCatchHandler } from "workbox-routing";
import { NetworkFirst, CacheFirst } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";

self?.skipWaiting(); // DONT WAIT FOR USER TO CLOSE ALL TAB
clientsClaim(); //  take control ASAP

const WB_MANIFEST = self.__WB_MANIFEST;
// Precache fallback route and image
WB_MANIFEST.push({
  url: "/fallback",
  revision: "1234567890",
});
precacheAndRoute(WB_MANIFEST);

// cache for image
setCatchHandler(({ event }) => {
  switch (event.request.destination) {
    case "document":
      // If using precached URLs:
      return matchPrecache("/fallback");

    case "image":
      // If using precached URLs:
      return matchPrecache("/static/images/fallback.png");

    case "font":
    // If using precached URLs:
    // return matchPrecache(FALLBACK_FONT_URL);
    //return caches.match('/static/fonts/fallback.otf')
    //break

    default:
      // If we don't have a fallback in the cache, return an error response.
      return new Response("Service Unavailable", {
        status: 503,
        statusText: "Service Unavailable",
        headers: {
          "Content-Type": "text/plain",
        },
      });
  }
});

registerRoute(
  ({ request }) => request.destination === "document",
  new CacheFirst({
    cacheName: "pages",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
);

registerRoute(
  /.*/i,
  new NetworkFirst({
    cacheName: "others",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
      }),
    ],
  })
);

// This "catch" handler is triggered when any of the other routes fail to
// generate a response.
setCatchHandler(({ event }) => {
  switch (event.request.destination) {
    case "document":
      // If using precached URLs:
      return matchPrecache("/fallback");

    case "font":
    // If using precached URLs:
    // return matchPrecache(FALLBACK_FONT_URL);
    //return caches.match('/static/fonts/fallback.otf')
    //break
    default:
      // If we don't have a fallback, just return an error response.
      return matchPrecache("/fallback");
  }
});
