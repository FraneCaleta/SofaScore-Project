/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://api.sofascore.com/api/v1"],
  },
};

module.exports = nextConfig;
