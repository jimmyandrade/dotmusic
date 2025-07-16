import type { FC } from 'react';

interface SpotifyEmbedProps {
  src: string;
  title?: string;
  height?: number | string;
  className?: string;
}

const SpotifyEmbed: FC<SpotifyEmbedProps> = ({
  src,
  title = 'Spotify Player',
  height = 400,
  className,
}: Readonly<SpotifyEmbedProps>) => (
  <iframe
    className={className ?? 'rounded-2xl border-0 w-full bg-black'}
    src={src}
    title={title}
    height={height}
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    style={{ minHeight: typeof height === 'number' ? `${height}px` : height }}
  />
);

SpotifyEmbed.displayName = 'SpotifyEmbed';
export default SpotifyEmbed;
