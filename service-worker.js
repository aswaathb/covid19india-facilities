if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"9584ea18c53484932b0ab07cf04e3ee2","url":"404.html"},{"revision":"d7e31151dcd23401679d39e494612d6f","url":"blog/index.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"9584ea18c53484932b0ab07cf04e3ee2","url":"index.html"},{"revision":"49e1f32b77a6fb0815093e070db34d44","url":"precache-manifest.49e1f32b77a6fb0815093e070db34d44.js"},{"revision":"8bf9f4a04624df685c16c7a85dabc32b","url":"static/css/11.93b3b32d.chunk.css"},{"revision":"1ab416fac31936ef1cc7a4eba63bda5a","url":"static/css/main.9d7fcf3d.chunk.css"},{"revision":"87825cd3541c9865a1a9d4f7d81386db","url":"static/js/0.53884abb.chunk.js"},{"revision":"259324e5bc97b311007199a8af647419","url":"static/js/1.4cb98280.chunk.js"},{"revision":"0e38259797505bfe64c1a97d620a5f33","url":"static/js/10.426ae726.chunk.js"},{"revision":"1033844f28634519e5a301597638c5e1","url":"static/js/11.f343ddad.chunk.js"},{"revision":"a7ccdb840f992ae3c5f69f3540419d6c","url":"static/js/12.22968508.chunk.js"},{"revision":"e589e243e05b3f3c4146d8ec7d33b23b","url":"static/js/13.26076852.chunk.js"},{"revision":"77dd99578b8154c3d8c98301b9040ed4","url":"static/js/2.d596e359.chunk.js"},{"revision":"bba27432ed8618093814ff3e36657ccb","url":"static/js/About.b0e9829c.chunk.js"},{"revision":"6b56593ec02b438f0883bb6f7ea4d052","url":"static/js/Demographics.ef4f8f31.chunk.js"},{"revision":"f7975349b2c372b71da0d58f7d50d915","url":"static/js/Essentials.e910425f.chunk.js"},{"revision":"57d9ee53aa2b8e46fcf0f3af3d1555cc","url":"static/js/Home.0a6169c6.chunk.js"},{"revision":"776da5a0cbbeff3b0640beb2d6e8430f","url":"static/js/main.f8ef40d5.chunk.js"},{"revision":"d6bf4e8488205ec4d3716736abde4c52","url":"static/js/runtime-main.ef52336d.js"},{"revision":"b14f29e0e8ab73a031579b3c9a848e6e","url":"static/js/State.e77bf0dd.chunk.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
