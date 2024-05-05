/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    WS_URL: process.env.WS_URL,
  },
};

export default nextConfig;
