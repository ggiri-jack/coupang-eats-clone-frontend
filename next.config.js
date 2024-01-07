/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['jotai-devtools'],
  async rewrites() {
    return [
      {
        source: `/api/:path*`,
        destination: `/api/:path*`,
      },
      {
        source: `/:path*`,
        destination: `http://localhost:4001/:path*`,
      },
    ];
  },
}

module.exports = nextConfig
