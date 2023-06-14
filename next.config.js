/** @type {import('next').NextConfig} */
const nextConfig = {}

// change config for gh actions deply settings for static Next Sites
module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        // Add other routes if needed
      };
    },
    output: 'export',
  };