/** @type {import('next').NextConfig} */
const nextConfig = {
  // hostname for images

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
      }
    ],
  },
}

const withPWA = require("next-pwa")({
  dest: "public",
  swSrc: "service-worker.js",
});

module.exports = withPWA(nextConfig)
