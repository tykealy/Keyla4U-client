const { Source } = require("@mui/icons-material");

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
    ];
  },
};

module.exports = nextConfig;
