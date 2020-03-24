'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/assests/clean.png": "2abafaea83130357cc5a2ca3d2543717",
"/assets/assests/corona.png": "47c07202803f6696f38621a36acd4912",
"/assets/assests/coronadetails.png": "3d0f719803f22351f87a95ccf02d40d2",
"/assets/assests/cough.png": "6235bfdea87af510282c2ab55443d09c",
"/assets/assests/home.png": "3bcb69942f0775fb4b2270e7ad54bd97",
"/assets/assests/man.png": "0c5adf959ba6cfcd575cbef74a5d69d9",
"/assets/assests/mask.png": "4fd19b7df8df2a654d55699367f019b8",
"/assets/assests/sneeze.png": "822f4608b9efe503bfb0720c15b62a45",
"/assets/assests/wash.png": "d0cd15e9760c6aa549fa83d512df7114",
"/assets/AssetManifest.json": "ffdf0f1a487b746b8c399fde87c2ec1b",
"/assets/FontManifest.json": "1aae340c131b31f1f8c26eb345747b24",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/Staatliches-Regular.ttf": "d5746e3b20453d6cee99ab27a0bdf949",
"/assets/LICENSE": "9ea11a0967289c382ec714dafce48c2a",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "8d0d74fa070d25f1d57e29df18800b8a",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "28283cfb188e604f87cc82b7cdb2a6f1",
"/main.dart.js": "cc7fc6d1a276e330fe5780a11bd2dca2",
"/manifest.json": "df3cfbb6aed5cd4d7a54886d3a611fe5"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
