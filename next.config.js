/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Hindari masalah gambar saat export
  },
};

module.exports = nextConfig;
