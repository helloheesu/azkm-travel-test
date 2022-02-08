/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/test/:number',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
