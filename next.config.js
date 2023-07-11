/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
      "/about-us": { page: "/about-us" }
    };
  },
  async rewrites() {
    return [
      {
        source: '/about-us',
        destination: '/about-us.html',
      },
    ];
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  target: "server",
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
}

module.exports = nextConfig;
