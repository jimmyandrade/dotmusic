import { VideoBanner } from '@jimmyandrade/social-media-ui/server';
import { Container, PageHeader, PageHeading } from '@jimmyandrade/ui/server';
import Link from 'next/link';

export default function SongPage() {
  return (
    <article id={SongPage.name}>
      <PageHeader>
        <PageHeading>Música</PageHeading>
      </PageHeader>
      <Container>
        <Link
          href="https://music.lnk.to/QZYQE4"
          rel="noopener noreferrer"
          target="_blank"
        >
          <VideoBanner
            alt="Quem Eu Sou"
            imageSources={{
              landscape: '/media/song/apple-music/landscape.png',
              portrait: '/media/song/apple-music/portrait.png',
              square: '/media/song/apple-music/square.png',
            }}
            videoSources={{
              landscape:
                'https://yzcskyrl4tqqw3un.public.blob.vercel-storage.com/media/music/quem-eu-sou-landscape.mp4',
              portrait:
                'https://yzcskyrl4tqqw3un.public.blob.vercel-storage.com/media/music/quem-eu-sou-portrait.mp4',
              square:
                'https://yzcskyrl4tqqw3un.public.blob.vercel-storage.com/media/music/quem-eu-sou-square.mp4',
            }}
          />
        </Link>
      </Container>
    </article>
  );
}
