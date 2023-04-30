/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "res.cloudinary.com",
      "www.lavozdelsur.es",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
