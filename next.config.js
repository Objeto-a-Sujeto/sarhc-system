/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
