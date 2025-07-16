import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jimmy Andrade',
    short_name: 'Jimmy Andrade',
    description:
      'Descubra o universo de Jimmy Andrade – música, shows, vídeos, notícias, conteúdo e mais. Fique a par dos últimos lançamentos, eventos e a produtos das lojas oficiais.',
    start_url: '/?source=pwa',
    id: '/?source=pwa',
    background_color: '#0b0e0d',
    theme_color: '#0b0e0d',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    display_override: ['standalone', 'minimal-ui', 'browser'],
    display: 'standalone',
    scope: '/',
    related_applications: [],

    // capture_links: 'none',
    shortcuts: [
      {
        name: 'Música',
        url: '/musica?feature=app_shortcuts',
        // icons: [
        //   {
        //     sizes: '512x512',
        //     type: 'image/png',
        //     purpose: 'any monochrome',
        //   },
        // ],
      },
      {
        name: 'Shows',
        url: '/shows/explore?feature=app_shortcuts',
        // icons: [
        //   {
        //     src: '',
        //     sizes: '512x512',
        //     type: 'image/png',
        //     purpose: 'any monochrome',
        //   },
        // ],
      },
      {
        name: 'Bio',
        url: '/bio/explore?feature=app_shortcuts',
        // icons: [
        //   {
        //     src: '',
        //     sizes: '512x512',
        //     type: 'image/png',
        //     purpose: 'any monochrome',
        //   },
        // ],
      },
      {
        name: 'Mídia',
        short_name: 'Mídia',
        description: 'Encontre releases e menções na mídia sobre Jimmy Andrade',
        url: '/midia/explore?feature=app_shortcuts&source=pwa',
        // icons: [
        //   {
        //     src: '',
        //     sizes: '512x512',
        //     type: 'image/png',
        //     purpose: 'any monochrome',
        //   },
        // ],
      },

      {
        name: 'Loja',
        short_name: 'Loja',
        url: '/loja?feature=app_shortcuts&source=pwa',
        description: 'Compre vinis, camisetas e mais',
      },
    ],
  };
}
