/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        // Add other routes if needed
      };
    },
    output: 'export',
  };
  