// sw.js
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // インストール可能にするための最低限の記述
});