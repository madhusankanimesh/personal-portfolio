import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/personal-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-portfolio/' : '',
  images: {
    unoptimized: true, // Required for static export
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
  trailingSlash: true,
};

export default nextConfig;
