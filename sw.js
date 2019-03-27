self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('video-store').then(function(cache) {
      return cache.addAll([
        './main.js',
        './index.html',
        './bg.jpeg',
        './index.css',
        './img/chrome-144x144.png',
        './img/chrome-192x192.png',
        './img/chrome-36x36.png',
        './img/chrome-48x48.png',
        './img/chrome-72x72.png',
        './img/chrome-96x96.png',
      ]);
    })
  );
 });
 
 self.addEventListener('fetch', function(e) {
   console.log(e.request.url);
   e.respondWith(
     caches.match(e.request).then(function(response) {
       return response || fetch(e.request);
     })
   );
 });
 