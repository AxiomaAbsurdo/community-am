/** @type {import('next').NextConfig} */
const nextConfig = {}

// change config for gh actions deply settings for static Next Sites

  module.exports = {
    generateStaticParams: async function () {
      return {
        '/': { page: '/' },
        // Add other routes if needed
      };
    },
    images: {
      loader: 'vercel',
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60,
  },
    output: 'export',
  };
