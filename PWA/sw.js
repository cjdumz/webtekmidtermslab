importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('theme').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/assets/css/bootstrap.css',
       '/assets/css/main.css',
       '/assets/fonts/glyphicons-halflings-regular.eot',
       '/assets/fonts/glyphicons-halflings-regular.ttf',
       '/assets/images/bg.jpg',
       '/assets/images/header1.jpg',
       '/assets/images/header2.jpg',
       '/assets/images/header3.jpg',
       '/assets/images/header4.jpg',
       '/assets/images/icon.png',
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