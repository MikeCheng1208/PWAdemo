var cacheName = 'weatherPWA-step-6-6';
var filesToCache = [  
    '/',  
    './index.html',  
    './bg.jpeg',
    './index.js',
    './utils.js',
    './Icon-App-76x76@1x.png',
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});