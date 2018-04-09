importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('theme').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/4teams.html',
       '/8teams.html',
       '/12teams.html',
       '/assets/css/bootstrap.css',
       '/assets/css/main.css',
       '/assets/fonts/glyphicons-halflings-regular.eot',
       '/assets/fonts/glyphicons-halflings-regular.ttf',
       '/assets/js/bootstrap.min.js',
       '/assets/js/hover.zoom.conf.js',
       '/assets/js/hover.zoom.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {

  console.log(event.request.url);

  event.respondWith(

    caches.match(event.request).then(function(response) {

      return response || fetch(event.request);

    })
  );
});