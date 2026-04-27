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
      },
      {
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
