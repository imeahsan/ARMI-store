if (!self.define) {
  let e,
    s = {};
  const a = (a, c) => (
    (a = new URL(a + ".js", c).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, n) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let r = {};
    const t = (e) => a(e, i),
      d = { module: { uri: i }, exports: r, require: t };
    s[i] = Promise.all(c.map((e) => d[e] || t(e))).then((e) => (n(...e), r));
  };
}
define(["./workbox-7c2a5a06"], function (e) {
  "use strict";
  importScripts("fallback-a-572p8GVS3wxv2kfRumO.js"),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/404.svg", revision: "d38ac435783a21f1956e5ca6c207228d" },
        {
          url: "/_next/static/a-572p8GVS3wxv2kfRumO/_buildManifest.js",
          revision: "98bdcda2f0fa5a443004f172966744bc",
        },
        {
          url: "/_next/static/a-572p8GVS3wxv2kfRumO/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/157-7c27e79c02efdc88.js",
          revision: "7c27e79c02efdc88",
        },
        {
          url: "/_next/static/chunks/1b8dab7b-e71a73e857a21eea.js",
          revision: "e71a73e857a21eea",
        },
        {
          url: "/_next/static/chunks/228771e0-98fcfd44de98fd5e.js",
          revision: "98fcfd44de98fd5e",
        },
        {
          url: "/_next/static/chunks/264-34fe43dec2afa4e1.js",
          revision: "34fe43dec2afa4e1",
        },
        {
          url: "/_next/static/chunks/274-7925416da0d2b372.js",
          revision: "7925416da0d2b372",
        },
        {
          url: "/_next/static/chunks/31664189-63afbd9203791326.js",
          revision: "63afbd9203791326",
        },
        {
          url: "/_next/static/chunks/318-d23033e24919812e.js",
          revision: "d23033e24919812e",
        },
        {
          url: "/_next/static/chunks/324-7d4294566c2c5be1.js",
          revision: "7d4294566c2c5be1",
        },
        {
          url: "/_next/static/chunks/351-8c299008da92ce1e.js",
          revision: "8c299008da92ce1e",
        },
        {
          url: "/_next/static/chunks/461-f10b2251d8d6cded.js",
          revision: "f10b2251d8d6cded",
        },
        {
          url: "/_next/static/chunks/464.27d3e4f7289ade74.js",
          revision: "27d3e4f7289ade74",
        },
        {
          url: "/_next/static/chunks/505-2800d96cc53c9d30.js",
          revision: "2800d96cc53c9d30",
        },
        {
          url: "/_next/static/chunks/519-d39884fd96237d72.js",
          revision: "d39884fd96237d72",
        },
        {
          url: "/_next/static/chunks/545.afa3222a2781c3fc.js",
          revision: "afa3222a2781c3fc",
        },
        {
          url: "/_next/static/chunks/65291039-c95616763e4667bd.js",
          revision: "c95616763e4667bd",
        },
        {
          url: "/_next/static/chunks/679-e8b701f95175ddd4.js",
          revision: "e8b701f95175ddd4",
        },
        {
          url: "/_next/static/chunks/769-59bca6883c0e3f58.js",
          revision: "59bca6883c0e3f58",
        },
        {
          url: "/_next/static/chunks/921-92c80ea9f0087e36.js",
          revision: "92c80ea9f0087e36",
        },
        {
          url: "/_next/static/chunks/929-668a56c0f5765b3b.js",
          revision: "668a56c0f5765b3b",
        },
        {
          url: "/_next/static/chunks/ae51ba48-abfd3b970acf6321.js",
          revision: "abfd3b970acf6321",
        },
        {
          url: "/_next/static/chunks/c9184924-767b7949d33f3007.js",
          revision: "767b7949d33f3007",
        },
        {
          url: "/_next/static/chunks/framework-3b1fdd47ea23de49.js",
          revision: "3b1fdd47ea23de49",
        },
        {
          url: "/_next/static/chunks/main-3594a668a23ffc6c.js",
          revision: "3594a668a23ffc6c",
        },
        {
          url: "/_next/static/chunks/pages/404-7fb58e9033345d2a.js",
          revision: "7fb58e9033345d2a",
        },
        {
          url: "/_next/static/chunks/pages/_app-71fff7f2b7da0112.js",
          revision: "71fff7f2b7da0112",
        },
        {
          url: "/_next/static/chunks/pages/_error-df4003869a6623b0.js",
          revision: "df4003869a6623b0",
        },
        {
          url: "/_next/static/chunks/pages/_offline-32155676494c6dc6.js",
          revision: "32155676494c6dc6",
        },
        {
          url: "/_next/static/chunks/pages/about-us-f0a1d39412a7b6c0.js",
          revision: "f0a1d39412a7b6c0",
        },
        {
          url: "/_next/static/chunks/pages/checkout-70c773598afb4bab.js",
          revision: "70c773598afb4bab",
        },
        {
          url: "/_next/static/chunks/pages/contact-us-82643bb603f7194d.js",
          revision: "82643bb603f7194d",
        },
        {
          url: "/_next/static/chunks/pages/faq-9d2ca0f047267fe7.js",
          revision: "9d2ca0f047267fe7",
        },
        {
          url: "/_next/static/chunks/pages/index-d908981243cd0290.js",
          revision: "d908981243cd0290",
        },
        {
          url: "/_next/static/chunks/pages/offer-053488f65c31d936.js",
          revision: "053488f65c31d936",
        },
        {
          url: "/_next/static/chunks/pages/order/%5Bid%5D-b7943efa166e2f9a.js",
          revision: "b7943efa166e2f9a",
        },
        {
          url: "/_next/static/chunks/pages/privacy-policy-a54e557516ff0256.js",
          revision: "a54e557516ff0256",
        },
        {
          url: "/_next/static/chunks/pages/product/%5Bslug%5D-5f21c201e3e384a4.js",
          revision: "5f21c201e3e384a4",
        },
        {
          url: "/_next/static/chunks/pages/search-ee43fe008bc1afef.js",
          revision: "ee43fe008bc1afef",
        },
        {
          url: "/_next/static/chunks/pages/terms-and-conditions-39e575355753dbcf.js",
          revision: "39e575355753dbcf",
        },
        {
          url: "/_next/static/chunks/pages/user/change-password-bc79a0df1cd9e453.js",
          revision: "bc79a0df1cd9e453",
        },
        {
          url: "/_next/static/chunks/pages/user/dashboard-c2ad395d98dabc9f.js",
          revision: "c2ad395d98dabc9f",
        },
        {
          url: "/_next/static/chunks/pages/user/email-verification/%5Btoken%5D-11315b709c310e5a.js",
          revision: "11315b709c310e5a",
        },
        {
          url: "/_next/static/chunks/pages/user/forget-password/%5Btoken%5D-058b873c1e5f324c.js",
          revision: "058b873c1e5f324c",
        },
        {
          url: "/_next/static/chunks/pages/user/my-orders-8a16cb421c886efd.js",
          revision: "8a16cb421c886efd",
        },
        {
          url: "/_next/static/chunks/pages/user/recent-order-5fbf42aa04ff75c3.js",
          revision: "5fbf42aa04ff75c3",
        },
        {
          url: "/_next/static/chunks/pages/user/update-profile-e9de798ff70f5e07.js",
          revision: "e9de798ff70f5e07",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-099647095af018d5.js",
          revision: "099647095af018d5",
        },
        {
          url: "/_next/static/css/21170dfef7fc2d21.css",
          revision: "21170dfef7fc2d21",
        },
        {
          url: "/_next/static/css/2c198b4fd943e76e.css",
          revision: "2c198b4fd943e76e",
        },
        {
          url: "/_next/static/css/8836621a69c35e74.css",
          revision: "8836621a69c35e74",
        },
        {
          url: "/_next/static/css/fe3ca4aa668b6f4f.css",
          revision: "fe3ca4aa668b6f4f",
        },
        { url: "/_offline", revision: "a-572p8GVS3wxv2kfRumO" },
        {
          url: "/about-banner.jpg",
          revision: "79bcd14e1663eeb10fd2078a1b40a68a",
        },
        { url: "/about-us.jpg", revision: "a69c8f7c944c6dd9673e4e8407684ae9" },
        {
          url: "/app-download-img-left.png",
          revision: "72d8da82c11b9694f687e2b24711a82a",
        },
        {
          url: "/app-download-img.png",
          revision: "22ab424e74d09df11be0f6943a264856",
        },
        {
          url: "/app/app-store.svg",
          revision: "a717e97b14d37aa12c48a288bddf4bae",
        },
        {
          url: "/app/mastercard-icon.svg",
          revision: "2f3b7f6dc10d68bf74366ce0e4b39217",
        },
        {
          url: "/app/paypal-icon.svg",
          revision: "99025da84086629516e323641cdfd73b",
        },
        {
          url: "/app/play-store.svg",
          revision: "a2b0ad8b1000e23bf80ca9ef30b14b97",
        },
        {
          url: "/app/skrill-icon.svg",
          revision: "01cb261e1e28b74c3f51a379a63216d3",
        },
        {
          url: "/app/visa-icon.svg",
          revision: "58cb00fe42ab95ae26c5e7e429f04545",
        },
        { url: "/banner-1.jpg", revision: "96eaf5765f56f7574dc21db0424668f3" },
        { url: "/banner-2.jpg", revision: "d08fc088d9d75823e8259261e9208cf2" },
        {
          url: "/contact-us.png",
          revision: "1f0a34dcebe83884f7d986c29069cff0",
        },
        { url: "/cta-bg.png", revision: "0dd94ded00743cc74d0da8027b579b73" },
        {
          url: "/cta/cta-bg-1.jpg",
          revision: "45b3e432be8fc7f3eb09f2568a61d8c2",
        },
        {
          url: "/cta/cta-bg-2.jpg",
          revision: "83ca16fa37654fd7de5518d0f347a29c",
        },
        {
          url: "/cta/cta-bg-3.jpg",
          revision: "42c150e775ca1b35399b3428d5ee2e00",
        },
        {
          url: "/cta/delivery-boy.png",
          revision: "9914b651b1428467046e8b886166dac9",
        },
        {
          url: "/facebook-page.png",
          revision: "0a668853fee7423c27bb93b947a6fc1c",
        },
        { url: "/faq.svg", revision: "2979a7b97c0c5d96960e9558a389bbd4" },
        { url: "/favicon.png", revision: "0033e08ea1185a9ef4ddea787f470df5" },
        { url: "/flags/de.svg", revision: "a491da9c1549a36b293a6a391739dfda" },
        { url: "/flags/us.svg", revision: "8886b28b10e3ec0756a9935a216d5bba" },
        {
          url: "/icon-192x192.png",
          revision: "47e2812c3e78f1903ccd46f0545f5d48",
        },
        {
          url: "/icon-256x256.png",
          revision: "5cfadd2f4679b3d86f1d994297809226",
        },
        {
          url: "/icon-384x384.png",
          revision: "e793bffd9497800be7d461caa873b96b",
        },
        {
          url: "/icon-512x512.png",
          revision: "b9df59369ad910b5d3e338e9076fd944",
        },
        {
          url: "/ARMI-store-min.png",
          revision: "6bf12cd3f0a8d7ccf8285ea0672bf182",
        },
        {
          url: "/loader/spinner.gif",
          revision: "9317b1364997865cda53478fb9302977",
        },
        {
          url: "/logo/bag-shoping.svg",
          revision: "54014870b794b613e62017decbe943d0",
        },
        {
          url: "/logo/logo-color.png",
          revision: "5935965ef93ee2a9eab4a1240699bc5f",
        },
        {
          url: "/logo/logo-color.svg",
          revision: "9cdfd2a1723ebe5d6fbfeb2a3a07765d",
        },
        {
          url: "/logo/logo-dark-2.svg",
          revision: "990e13afb1b79734e26b71f2fcc062d9",
        },
        {
          url: "/logo/logo-dark.svg",
          revision: "3d5619a9dd2312d20ee908259e95a635",
        },
        {
          url: "/logo/logo-light-2.svg",
          revision: "8e9e97fd3acd9a7aa3525e2c5eb93811",
        },
        {
          url: "/logo/logo-light.svg",
          revision: "a295f016c697789c084b023006b33ac5",
        },
        { url: "/manifest.json", revision: "1bdc898597594f46bcd9b0ae76e7c991" },
        { url: "/no-result.svg", revision: "508b2439b4b83ce579e826c9c625b675" },
        {
          url: "/page-header-bg.jpg",
          revision: "c7cf9224e6c1ae3add73d30c2ae7a8f8",
        },
        {
          url: "/payment-method/payment-logo.png",
          revision: "469911779f6463e5751cf5b7046384d2",
        },
        { url: "/robots.txt", revision: "61c27d2cd39a713f7829422c3d9edcc7" },
        {
          url: "/slider/slider-1.jpg",
          revision: "9611448d0a85493ee21c5317323cb601",
        },
        {
          url: "/slider/slider-2.jpg",
          revision: "fe98a6e4032332b05d52aa1254f085a7",
        },
        {
          url: "/slider/slider-3.jpg",
          revision: "06cef52491c3b8682d15596e784362bb",
        },
        { url: "/sw.js", revision: "3babca1d969f2ec8e3f712ae338713de" },
        {
          url: "/team/team-1.jpg",
          revision: "e318a12728d39d01c926be7fbbcd6876",
        },
        {
          url: "/team/team-2.jpg",
          revision: "ba945720d060272d028634a8729b7d2b",
        },
        {
          url: "/team/team-3.jpg",
          revision: "dfa429c7e964aa5a8ea01c3959710529",
        },
        {
          url: "/team/team-4.jpg",
          revision: "490ae645f676543ef728fc2548a6bd3f",
        },
        {
          url: "/team/team-5.jpg",
          revision: "a345363d59da88084c7fd6de76cc978c",
        },
        {
          url: "/team/team-6.jpg",
          revision: "39e8a23ea2ae4bc88316d1ddad73132c",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: c,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    );
});
