self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('perf-zone').then(function(cache) {
      return cache.addAll(['/', '/index.html', '/app*.js'])
    })
  )
})

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(event.request).then(function(res) {
      return res || fetch(event.request)
    })
  )
})
