importScripts('/js/asset/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('jpborges').then(function(cache) {
     return cache.addAll([
        '/'
        ,'/index.html'
        ,'/css/asset/bootstrap.min.css'
        ,'/css/asset/fontawesome.min.css'
        ,'/css/asset/w3.css'
        ,'/css/style.css'
        ,'/js/asset/jquery.min.js'
        ,'/js/asset/bootstrap.min.js'
        ,'/js/script.js'
        ,'/img/me.webp'
        ,'/img/work/asseco.webp'
        ,'/img/work/odkas.webp'
        ,'/img/work/miti.webp'
        ,'/img/work/exictos.webp'
        ,'/img/university/uma.webp'
        ,'/img/university/um.webp'
        ,'/img/balcony.webp'
        ,'/css/webfonts/fa-solid-900.woff2'
        ,'/css/webfonts/fa-solid-900.woff'
        ,'/css/webfonts/fa-solid-900.ttf'
        ,'/css/webfonts/fa-brands-400.woff2'
        ,'/css/webfonts/fa-brands-400.woff'
        ,'/css/webfonts/fa-brands-400.ttf'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(function(response) {
      return response || fetch(event.request);
    })
  );
});