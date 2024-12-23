//@ts-check

const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  images: {
    remotePatterns: [
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
    ],
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  redirects: async () => {
    return [
      {
        source: '/manifest.json',
        destination: '/manifest.webmanifest',
        permanent: true,
      },
    ];
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
