/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.5.248',
        port: '3333',
        pathname: '/uploads/**',
      },
    ],
    domains: ['avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
