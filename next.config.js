/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    unoptimized: true, // Hindari masalah gambar saat export
  },
};

module.exports = nextConfig;
