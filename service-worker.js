const cacheName = 'agriconnect-cache-v1';
const assetsToCache = [
'/index.html',
'/inscription.html',
'/dashboard.html',
'/carte.html',
'/prix.html',
'/ia.html',
'/ia-conseil.html',
'/meteo.html',
'/chat.html',
'/style.css',
'/images/icon.png'
];

self.addEventListener('install', e=>{
e.waitUntil(
caches.open(cacheName).then(cache=>cache.addAll(assetsToCache))
);
});

self.addEventListener('fetch', e=>{
e.respondWith(
caches.match(e.request).then(response=>response || fetch(e.request))
);
});
