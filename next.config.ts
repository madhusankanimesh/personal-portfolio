import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['nimeshmadhusanka.me'],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
};

export default nextConfig;
