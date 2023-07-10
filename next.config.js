/** @type {import('next').NextConfig} */
const nextConfig = {
  babel: {
    configFile: ".babelrc"
  },
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
}

module.exports = nextConfig;
