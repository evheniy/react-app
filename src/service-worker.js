importScripts('workbox-sw.prod.js');

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true,
});

workboxSW.precache([]);

workboxSW.router.registerRoute('https://fonts.googleapis.com/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheExpiration: {
      maxEntries: 20,
    },
    cacheableResponse: { statuses: [0, 200] },
  })
);

workboxSW.router.registerRoute('https://fonts.gstatic.com/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'gstatic',
    cacheExpiration: {
      maxEntries: 20,
    },
    cacheableResponse: { statuses: [0, 200] },
  })
);

// We want no more than 50 images in the cache. We check using a cache first strategy
workboxSW.router.registerRoute(/\.(?:png|gif|jpg)$/,
  workboxSW.strategies.cacheFirst({
    cacheName: 'images-cache',
    cacheExpiration: {
      maxEntries: 50,
    },
  })
);

workboxSW.router.registerRoute(/index.html/, workboxSW.strategies.staleWhileRevalidate());
workboxSW.router.registerRoute('/actions', workboxSW.strategies.staleWhileRevalidate());

