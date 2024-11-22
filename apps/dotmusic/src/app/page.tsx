import { Box, Heading, VisuallyHidden } from '@radix-ui/themes';
import Link from 'next/link';

export default function Index() {
  const videoId = 'E_sZHM53ekE';
  const baseURL = `https://www.youtube.com/embed/${videoId}`;
  const url = new URL(baseURL);
  url.searchParams.append('autoplay', '1');
  url.searchParams.append('color', 'white');
  url.searchParams.append('controls', '0');
  url.searchParams.append('fs', '1');
  url.searchParams.append('loop', '0');
  url.searchParams.append('modestbranding', '1');
  url.searchParams.append('mute', '1');
  url.searchParams.append('origin', 'https://jimmyandrade.music');
  url.searchParams.append('playsinline', '1');
  url.searchParams.append('rel', '0');
  url.searchParams.append('showinfo', '0');
  url.searchParams.append('si', 'd0DqYlNSYNIMIW-1');
  url.searchParams.append('start', '146');

  return (
    <article>
      <VisuallyHidden asChild>
        <Heading as="h2">
          <Link href="/">Página inicial</Link>
        </Heading>
      </VisuallyHidden>
      <Box asChild>
        <section>
          <VisuallyHidden asChild>
            <Heading as="h2">
              Vídeo de <cite>Ultimato.</cite>
            </Heading>
          </VisuallyHidden>
          <Box
            className="aspect-video pointer-events-none"
            overflow="hidden"
            minHeight="0"
            maxWidth="100%"
            position="relative"
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0 aspect-video"
              referrerPolicy="strict-origin-when-cross-origin"
              src={url.toString()}
              title="YouTube video player"
            />
          </Box>
        </section>
      </Box>
    </article>
  );
}
