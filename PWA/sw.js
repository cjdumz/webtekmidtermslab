importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('theme').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/css/style.css',
       '/css/style-desktop.css',
       '/css/style-mobile.css',
       '/jss/html5shiv.js',
       '/jss/init.js',
       '/jss/skel.min.js',
       '/jss/skel-panels.min.js',
       '/json/manifest.json.json',
       '/json/icons/icon48',
       '/json/icons/icon96',
       '/json/icons/icon128',
       '/json/icons/icon144'
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