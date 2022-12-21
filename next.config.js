/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    backendUrl: "http://localhost:3000/api",
  },
};

module.exports = nextConfig;
