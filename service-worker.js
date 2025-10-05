self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  console.log('Service Worker 활성화됨');
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('https://accounts.google.com/'));
});