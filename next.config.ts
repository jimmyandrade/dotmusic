// @ts-check

import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

import { allowedImageHosts } from './src/config/imageHosts';

const withMDX = createMDX({ extension: /\.mdx?$/ });

const nextConfig: NextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: allowedImageHosts.map((host) => ({
      protocol: 'https',
      hostname: host,
    })),
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
        source: '/links',
        destination: 'https://linktr.ee/jimmyandrade',
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

export default withMDX(nextConfig);
