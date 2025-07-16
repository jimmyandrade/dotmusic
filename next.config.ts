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
        source: '/%EF%BF%BD',
        destination: 'https://linktr.ee/jimmyandrade',
        permanent: false,
      },
      {
        source: '/%F0%9F%94%97',
        destination: 'https://linktr.ee/jimmyandrade',
        permanent: false,
      },
      {
        source: '/albums',
        destination: '/musica',
        permanent: false,
      },
      {
        source: '/sinceramente-axe-remix',
        destination: 'https://onerpm.link/119821866394',
        permanent: false,
      },
      {
        source: '/songs',
        destination: '/musica',
        permanent: true,
      },
      {
        source: '/ultimato',
        destination: 'https://onerpm.link/528000625018',
        permanent: false,
      },
      {
        source: '/ultimato/video',
        destination: 'https://www.youtube.com/watch?v=E_sZHM53ekE',
        permanent: false,
      },
      {
        source: '/ultimato/videos',
        destination: 'https://www.youtube.com/watch?v=E_sZHM53ekE',
        permanent: false,
      },
      {
        source: '/manifest.json',
        destination: '/manifest.webmanifest',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
