        const CACHE_NAME = 'webcam-app-cache-v1';
        const urlsToCache = [
          '/',
          '/index.html',
          '/manifest.json',
          '/service-worker.js',
          // Tailwind CSS and Font Awesome from CDNs
          'https://cdn.tailwindcss.com',
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
          'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
          'https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js',
          // Your custom icon paths (ensure these paths are correct relative to your root)
          '/favicon.ico', // Assuming favicon.ico is in the root
          '/apple-touch-icon.png', // Assuming apple-touch-icon.png is in the root
          '/icons/72.png',
          '/icons/96.png',
          '/icons/128.png',
          '/icons/144.png',
          '/icons/152.png',
          '/icons/192.png',
          '/icons/384.png',
          '/icons/512.png'
          // Add any other JavaScript files, custom CSS files, etc., here if they are not inlined
        ];

        self.addEventListener('install', event => {
          event.waitUntil(
            caches.open(CACHE_NAME)
              .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
              })
              .catch(error => {
                console.error('Failed to cache during install:', error);
              })
          );
        });

        self.addEventListener('fetch', event => {
          event.respondWith(
            caches.match(event.request)
              .then(response => {
                // Cache hit - return response
                if (response) {
                  return response;
                }
                return fetch(event.request);
              })
              .catch(error => {
                console.error('Fetch failed:', error);
                // You can return a custom offline page here if needed
                // For example: return caches.match('/offline.html');
              })
          );
        });

        self.addEventListener('activate', event => {
          const cacheWhitelist = [CACHE_NAME];
          event.waitUntil(
            caches.keys().then(cacheNames => {
              return Promise.all(
                cacheNames.map(cacheName => {
                  if (cacheWhitelist.indexOf(cacheName) === -1) {
                    // Delete old caches
                    return caches.delete(cacheName);
                  }
                })
              );
            })
          );
        });
        
