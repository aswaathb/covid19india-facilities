if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"b5c3c8cea8b19ca0e9dedb52ec956380","url":"404.html"},{"revision":"d7e31151dcd23401679d39e494612d6f","url":"blog/index.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"b5c3c8cea8b19ca0e9dedb52ec956380","url":"index.html"},{"revision":"5a3396a50f86ef2e22545a876e463892","url":"precache-manifest.5a3396a50f86ef2e22545a876e463892.js"},{"revision":"8bf9f4a04624df685c16c7a85dabc32b","url":"static/css/11.93b3b32d.chunk.css"},{"revision":"754f847cc0b1aa7ece3a615c1ca5a82a","url":"static/css/12.7c35e809.chunk.css"},{"revision":"8ccba7d985cd64a02a1a19ed1733ca4f","url":"static/css/main.4f4c627a.chunk.css"},{"revision":"7ec50022b0aa0e2d58b5b14435894f3c","url":"static/js/0.26ccf87e.chunk.js"},{"revision":"be05ef7641643252581da79c6405347d","url":"static/js/1.b604f055.chunk.js"},{"revision":"6b8d3e01b2c30cd48a8aedfc354a554e","url":"static/js/10.5e2ae892.chunk.js"},{"revision":"68f39529be1c4117fa98db5592cdb328","url":"static/js/11.660cdf10.chunk.js"},{"revision":"410163f0bd1a4af4cd54ac632f3626a6","url":"static/js/12.2069516f.chunk.js"},{"revision":"f8585f351840bcf60629b5f76e1a34bf","url":"static/js/13.c6ead249.chunk.js"},{"revision":"eaab6140098b44db247c6722b6584dbf","url":"static/js/2.17385a69.chunk.js"},{"revision":"049d2c493573ae118645604277e4d22f","url":"static/js/About.ccd02e46.chunk.js"},{"revision":"7ed4132971e25698d98499f12063a562","url":"static/js/Demographics.fae72037.chunk.js"},{"revision":"7fdba634c531266659ae3df45e2f7c93","url":"static/js/Home.5fa37ff9.chunk.js"},{"revision":"549697965099dd25b26c5fb8550bf460","url":"static/js/main.5e8310a9.chunk.js"},{"revision":"301354326d799179d82fa7acec892004","url":"static/js/Navigate.1dc95f5c.chunk.js"},{"revision":"137f489a6523e721be25dd48cd757c92","url":"static/js/runtime-main.a06e65d5.js"},{"revision":"7983c32fb93d44e7ab6dc3e28efc1e69","url":"static/js/State.ee969921.chunk.js"}]);

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
