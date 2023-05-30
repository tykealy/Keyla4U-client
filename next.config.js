/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/login",
        destination: "http://localhost:8000/api/login",
      },
      {
        source: "/api/register",
        destination: "http://localhost:8000/api/register",
      },
      {
        source: "/api/order",
        destination: "http://127.0.0.1:8000/api/order",
      },
      {
        source: "/api/:path*",
        destination: "https://localhost:8000/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
