/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    backendUrl: `${process.env.NEXT_PUBLIC_URL}/api`,
  },
};

module.exports = nextConfig;
