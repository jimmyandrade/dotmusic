// @ts-check
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'db.music',
      },
      {
        protocol: 'https',
        hostname: '*.ffm.to',
      },
      {
        protocol: 'https',
        hostname: '*.gstatic.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'jimmyandrade.com',
      },
      {
        protocol: 'https',
        hostname: 'jimmyandrade.music',
      },
      {
        protocol: 'https',
        hostname: 'jimmyandrade.net',
      },
      {
        protocol: 'https',
        hostname: 'jyverso.com.br',
      },
      {
        protocol: 'https',
        hostname: 'quemeusou.com.br',
      },
      {
        protocol: 'https',
        hostname: 'photos.bandsintown.com',
        pathname: '/large/**',
      },
      {
        protocol: 'https',
        hostname: 'photos.bandsintown.com',
        pathname: '/thumb/**',
      },
      {
        protocol: 'https',
        hostname: 'rsv-ink-images-production.s3.sa-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'rsv-ink-images.ink.rsvcloud.com',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/manifest.json',
        destination: '/manifest.webmanifest',
        permanent: true,
      },
      {
        source: '/albums',
        destination: '/musica',
        permanent: false,
      },
      {
        source: '/songs',
        destination: '/musica',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
