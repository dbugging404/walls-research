/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'assets.vercel.com',
      'cdn.sanity.io',
      'res.cloudinary.com',
      'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig;
