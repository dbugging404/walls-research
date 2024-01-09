/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'assets.vercel.com',
      'cdn.sanity.io',
      'res.cloudinary.com',
      'images.unsplash.com',
    ],
  },
};

const pwa = withPWA({
  dest: 'public',
  scope: '/pages',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

export default pwa(nextConfig);
