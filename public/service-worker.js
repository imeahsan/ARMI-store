if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const t=e=>s(e,n),d={module:{uri:n},exports:r,require:t};a[n]=Promise.all(c.map((e=>d[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts("fallback-YByHVm5Jv0ckzTS0q1aoF.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1234.png",revision:"90304fcc01a534f73c7b2763c46912eb"},{url:"/404.svg",revision:"a1548d70c1e3e35ec92ec147d8da7088"},{url:"/_next/static/YByHVm5Jv0ckzTS0q1aoF/_buildManifest.js",revision:"30ac0fd219b5c9f5c7c5ee7b23289e4b"},{url:"/_next/static/YByHVm5Jv0ckzTS0q1aoF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1389.3c428f304b74987a.js",revision:"3c428f304b74987a"},{url:"/_next/static/chunks/1b8dab7b-4896bd9768a23e7a.js",revision:"4896bd9768a23e7a"},{url:"/_next/static/chunks/228771e0-3d70a4e6d444cb9e.js",revision:"3d70a4e6d444cb9e"},{url:"/_next/static/chunks/2324-3a3cac4264e4a978.js",revision:"3a3cac4264e4a978"},{url:"/_next/static/chunks/2505-981a3e0b4b348987.js",revision:"981a3e0b4b348987"},{url:"/_next/static/chunks/264-34fe43dec2afa4e1.js",revision:"34fe43dec2afa4e1"},{url:"/_next/static/chunks/274-92779838806cd837.js",revision:"92779838806cd837"},{url:"/_next/static/chunks/31664189-811b3c18b425ce12.js",revision:"811b3c18b425ce12"},{url:"/_next/static/chunks/3461-b99df4103aa116ec.js",revision:"b99df4103aa116ec"},{url:"/_next/static/chunks/351-c84c534c0adf4a36.js",revision:"c84c534c0adf4a36"},{url:"/_next/static/chunks/464.a236de14e332307e.js",revision:"a236de14e332307e"},{url:"/_next/static/chunks/5117-e354da257593da0a.js",revision:"e354da257593da0a"},{url:"/_next/static/chunks/65291039-ced13f023e0dab6a.js",revision:"ced13f023e0dab6a"},{url:"/_next/static/chunks/6679-c9c14ac414b36489.js",revision:"c9c14ac414b36489"},{url:"/_next/static/chunks/789-601eadded973997a.js",revision:"601eadded973997a"},{url:"/_next/static/chunks/7921-ab2e57dcbd9305bc.js",revision:"ab2e57dcbd9305bc"},{url:"/_next/static/chunks/8519-a29c80e8993e9420.js",revision:"a29c80e8993e9420"},{url:"/_next/static/chunks/8793-e7a9bade1c71253c.js",revision:"e7a9bade1c71253c"},{url:"/_next/static/chunks/8929-d07bbe8d0506918f.js",revision:"d07bbe8d0506918f"},{url:"/_next/static/chunks/9157-88ac51ac4a92ca8f.js",revision:"88ac51ac4a92ca8f"},{url:"/_next/static/chunks/9318-3868d3385fb5a90c.js",revision:"3868d3385fb5a90c"},{url:"/_next/static/chunks/ae51ba48-e60fc97635f2f1d8.js",revision:"e60fc97635f2f1d8"},{url:"/_next/static/chunks/c9184924-fac43af4aad53535.js",revision:"fac43af4aad53535"},{url:"/_next/static/chunks/framework-176add123fd0e546.js",revision:"176add123fd0e546"},{url:"/_next/static/chunks/main-9e49291446273b56.js",revision:"9e49291446273b56"},{url:"/_next/static/chunks/pages/404-1414c8059240be1b.js",revision:"1414c8059240be1b"},{url:"/_next/static/chunks/pages/_app-bd6d1543ab43cc69.js",revision:"bd6d1543ab43cc69"},{url:"/_next/static/chunks/pages/_error-88032d96b8c31c6e.js",revision:"88032d96b8c31c6e"},{url:"/_next/static/chunks/pages/_offline-49faf428b98abd5c.js",revision:"49faf428b98abd5c"},{url:"/_next/static/chunks/pages/about-us-62506ac81269e09e.js",revision:"62506ac81269e09e"},{url:"/_next/static/chunks/pages/careers-4e2b31e2b42ae6e6.js",revision:"4e2b31e2b42ae6e6"},{url:"/_next/static/chunks/pages/catalogue-3421fbee93838255.js",revision:"3421fbee93838255"},{url:"/_next/static/chunks/pages/checkout-2808dcb92b1865f5.js",revision:"2808dcb92b1865f5"},{url:"/_next/static/chunks/pages/checkout2-9e2353b913135249.js",revision:"9e2353b913135249"},{url:"/_next/static/chunks/pages/contact-us-b54094d56ebd1a9f.js",revision:"b54094d56ebd1a9f"},{url:"/_next/static/chunks/pages/faq-6df45144a8528318.js",revision:"6df45144a8528318"},{url:"/_next/static/chunks/pages/index-67eb78aacae0693c.js",revision:"67eb78aacae0693c"},{url:"/_next/static/chunks/pages/offer-cab3d2c0904f817b.js",revision:"cab3d2c0904f817b"},{url:"/_next/static/chunks/pages/order/%5Bid%5D-23274bb2a99250f9.js",revision:"23274bb2a99250f9"},{url:"/_next/static/chunks/pages/privacy-policy-f484d00228fa2b60.js",revision:"f484d00228fa2b60"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-295f9b1ded4928bd.js",revision:"295f9b1ded4928bd"},{url:"/_next/static/chunks/pages/request-quotation-9b7b9388deccf8e3.js",revision:"9b7b9388deccf8e3"},{url:"/_next/static/chunks/pages/search-adcfc6d9fa3150c9.js",revision:"adcfc6d9fa3150c9"},{url:"/_next/static/chunks/pages/terms-and-conditions-00932f62f1d97e03.js",revision:"00932f62f1d97e03"},{url:"/_next/static/chunks/pages/user/change-password-1acb8724b783088b.js",revision:"1acb8724b783088b"},{url:"/_next/static/chunks/pages/user/dashboard-64b9af98c5fd1ec3.js",revision:"64b9af98c5fd1ec3"},{url:"/_next/static/chunks/pages/user/email-verification/%5Btoken%5D-2c3566e160cb7a18.js",revision:"2c3566e160cb7a18"},{url:"/_next/static/chunks/pages/user/forget-password/%5Btoken%5D-b23082285568a2b5.js",revision:"b23082285568a2b5"},{url:"/_next/static/chunks/pages/user/my-orders-459a5442d25dd8c9.js",revision:"459a5442d25dd8c9"},{url:"/_next/static/chunks/pages/user/recent-order-145961974c55dd4d.js",revision:"145961974c55dd4d"},{url:"/_next/static/chunks/pages/user/update-profile-f99ac3b02cbf8956.js",revision:"f99ac3b02cbf8956"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/reactPlayerDailyMotion.bced8ac0d64957e6.js",revision:"bced8ac0d64957e6"},{url:"/_next/static/chunks/reactPlayerFacebook.262330d1a36851ed.js",revision:"262330d1a36851ed"},{url:"/_next/static/chunks/reactPlayerFilePlayer.3e2163e32c1503d0.js",revision:"3e2163e32c1503d0"},{url:"/_next/static/chunks/reactPlayerKaltura.1f4955f4f5e67b36.js",revision:"1f4955f4f5e67b36"},{url:"/_next/static/chunks/reactPlayerMixcloud.32d7cff7dd64fb31.js",revision:"32d7cff7dd64fb31"},{url:"/_next/static/chunks/reactPlayerPreview.d367952925922b41.js",revision:"d367952925922b41"},{url:"/_next/static/chunks/reactPlayerSoundCloud.8eac7dd41dc43a0d.js",revision:"8eac7dd41dc43a0d"},{url:"/_next/static/chunks/reactPlayerStreamable.a1e1d8921159def6.js",revision:"a1e1d8921159def6"},{url:"/_next/static/chunks/reactPlayerTwitch.ff262baccda17e85.js",revision:"ff262baccda17e85"},{url:"/_next/static/chunks/reactPlayerVidyard.fb0b123dd49c3079.js",revision:"fb0b123dd49c3079"},{url:"/_next/static/chunks/reactPlayerVimeo.fbb2f47466a44978.js",revision:"fbb2f47466a44978"},{url:"/_next/static/chunks/reactPlayerWistia.0ecd59a8ad2bb7a5.js",revision:"0ecd59a8ad2bb7a5"},{url:"/_next/static/chunks/reactPlayerYouTube.3ee27dbf5086398e.js",revision:"3ee27dbf5086398e"},{url:"/_next/static/chunks/webpack-8af865854ebb965e.js",revision:"8af865854ebb965e"},{url:"/_next/static/css/21170dfef7fc2d21.css",revision:"21170dfef7fc2d21"},{url:"/_next/static/css/4c2f35c361eda841.css",revision:"4c2f35c361eda841"},{url:"/_next/static/css/f09e737914029c91.css",revision:"f09e737914029c91"},{url:"/_next/static/css/fe3ca4aa668b6f4f.css",revision:"fe3ca4aa668b6f4f"},{url:"/_offline",revision:"YByHVm5Jv0ckzTS0q1aoF"},{url:"/about-banner.jpg",revision:"e870111261afba44d99d8fc8f081e4bd"},{url:"/android-chrome-192x192.png",revision:"3b49e984a86ddbe1a73a0d0971f14177"},{url:"/android-chrome-512x512.png",revision:"7cbbe7a30d921530acc4fcea80fc9e9f"},{url:"/app-download-img-left.png",revision:"72d8da82c11b9694f687e2b24711a82a"},{url:"/app-download-img.png",revision:"22ab424e74d09df11be0f6943a264856"},{url:"/app/app-store.svg",revision:"a717e97b14d37aa12c48a288bddf4bae"},{url:"/app/mastercard-icon.svg",revision:"2f3b7f6dc10d68bf74366ce0e4b39217"},{url:"/app/paypal-icon.svg",revision:"99025da84086629516e323641cdfd73b"},{url:"/app/play-store.svg",revision:"a2b0ad8b1000e23bf80ca9ef30b14b97"},{url:"/app/skrill-icon.svg",revision:"01cb261e1e28b74c3f51a379a63216d3"},{url:"/app/visa-icon.svg",revision:"58cb00fe42ab95ae26c5e7e429f04545"},{url:"/apple-touch-icon.png",revision:"617766827dedc5ae6799931494a7eb73"},{url:"/auction.png",revision:"9bd627bfdc6cb2df64c82227f196d74b"},{url:"/banner-1.jpg",revision:"96eaf5765f56f7574dc21db0424668f3"},{url:"/bg-image.jpg",revision:"e5b1f869601dc6a7c8e657f504a58c4e"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/buy-vehicle.png",revision:"ca1ba886463c2507c27dcadd521238a1"},{url:"/car-image-min.png",revision:"9f00b78700bf97db70d442c392929cd6"},{url:"/car-image.png",revision:"cbe19108684ad12a0e52e6c23f985d8d"},{url:"/car-placeholder.png",revision:"c76590fa93a0573fb285acbdf51a47ec"},{url:"/careers.svg",revision:"4cfd995efd7fb934d4df769a444afe46"},{url:"/contact-us.avif",revision:"a40a0f64ef06433736feee1b74c91232"},{url:"/contact-us.png",revision:"1f0a34dcebe83884f7d986c29069cff0"},{url:"/cta-bg.png",revision:"0dd94ded00743cc74d0da8027b579b73"},{url:"/cta/cta-bg-1.jpg",revision:"45b3e432be8fc7f3eb09f2568a61d8c2"},{url:"/cta/cta-bg-2.jpg",revision:"83ca16fa37654fd7de5518d0f347a29c"},{url:"/cta/cta-bg-3.jpg",revision:"42c150e775ca1b35399b3428d5ee2e00"},{url:"/cta/delivery-boy.png",revision:"9914b651b1428467046e8b886166dac9"},{url:"/e2e.png",revision:"f49b797ca79dfb15065b06c5be82fb40"},{url:"/facebook-page.png",revision:"0a668853fee7423c27bb93b947a6fc1c"},{url:"/faq.svg",revision:"2979a7b97c0c5d96960e9558a389bbd4"},{url:"/favicon-16x16.png",revision:"aaf947ccf3f8e86677e9e103464678dc"},{url:"/favicon-32x32.png",revision:"d22d2163df67478bc05a419381b97ead"},{url:"/favicon.ico",revision:"eb47e0bad93a80383e4a051081adba02"},{url:"/flags/de.svg",revision:"a491da9c1549a36b293a6a391739dfda"},{url:"/flags/us.svg",revision:"8886b28b10e3ec0756a9935a216d5bba"},{url:"/image.png",revision:"bb682f98263ab6683f620881758dafae"},{url:"/loader/spinner.gif",revision:"9317b1364997865cda53478fb9302977"},{url:"/logo/bag-shoping.svg",revision:"54014870b794b613e62017decbe943d0"},{url:"/logo/logo-color.png",revision:"0ffbac1b6820734b8896b8a857fb5b1a"},{url:"/logo/logo-color.svg",revision:"c64ed5ff8f3f5d321c91b207a785fc46"},{url:"/logo/logo-light.svg",revision:"c64ed5ff8f3f5d321c91b207a785fc46"},{url:"/manifest.json",revision:"c3d63eef6d06829438bc7c5c50762ac2"},{url:"/mstile-150x150.png",revision:"665af4d5d1168ed82741d9b5d265feff"},{url:"/no-result.svg",revision:"27a8bce3712595562f59aaec72a3fdb9"},{url:"/online-auctions-small.png",revision:"7c3a2a767d0386709d87ca6358f27036"},{url:"/parts-animated-1.gif",revision:"36822f063502fec0efd591f79e9aa1d5"},{url:"/parts.png",revision:"f0bc2eaa027bede8dab7715bb4bc59a7"},{url:"/payment-method/payment-logo.png",revision:"469911779f6463e5751cf5b7046384d2"},{url:"/recycle.png",revision:"f8593d2a3a30d7072d924c3191755efe"},{url:"/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"/safari-pinned-tab.svg",revision:"70447bacea732faaed556d388235927b"},{url:"/site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"/slider/slider-2.jpg",revision:"07f0a483d0a5afd2e3561ae208cdba33"},{url:"/sw.js",revision:"3babca1d969f2ec8e3f712ae338713de"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
