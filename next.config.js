const runtimeCaching = require("next-pwa/cache");
const nextTranslate = require("next-translate");

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  scope: "/",
  sw: "service-worker.js",
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["ar", "en"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    // defaultLocale: "ar",
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    domains: [
      {
        domain: "example.ar",
        defaultLocale: "ar",
      },
      {
        domain: "example.en",
        // defaultLocale: "en",
      },
    ],
  },

  images: {
    domains: [
      "images.unsplash.com",
      "img.icons8.com",
      "i.ibb.co",
      "i.postimg.cc",
      "fakestoreapi.com",
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "localhost",
      "http://13.53.232.204",
      "http://192.168.18.131",
      "images.dashter.com",
        "https://backend.armi.sa",
        "http://backend.armi.sa",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5055",
        pathname: "/file/**",
      },
      {
        protocol: "http",
        hostname: "192.168.18.131",
        port: "5055",
        pathname: "/file/**",
      },
      {
        protocol: "http",
        hostname: "13.53.232.204",
        port: "5055",
        pathname: "/file/**",
      },
      {
        protocol: "https",
        hostname: "backend.armi.sa",
        // port: "5055",
        pathname: "/file/**",
      }, {
        protocol: "http",
        hostname: "backend.armi.sa",
        // port: "5055",
        pathname: "/file/**",
      },
    ],
  },

  ...nextTranslate(),
});

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({});
