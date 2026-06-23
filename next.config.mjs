/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Don't block production builds on lint warnings
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Surface TS errors in CI but don't block Vercel deploy
    ignoreBuildErrors: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
