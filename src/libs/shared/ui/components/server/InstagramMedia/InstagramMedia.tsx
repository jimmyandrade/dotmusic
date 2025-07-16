import type { FC } from 'react';

export interface InstagramMediaProps
  extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  /**
   * @example C90ftgPylR1
   */
  id: string;
  /**
   * @required
   */
  title: string;
}

export const InstagramMedia: FC<InstagramMediaProps> = ({
  allow = "autoplay 'self'; fullscreen 'self'",
  className = '',
  id,
  title,
}: Readonly<InstagramMediaProps>) => {
  const permalink = `https://www.instagram.com/p/${id}/?utm_source=ig_embed`;
  return (
    <iframe
      allow={allow}
      className={`instagram-media border-0 bg-white ${className}`}
      data-instgrm-permalink={`${permalink}&amp;utm_campaign=loading`}
      src={`https://www.instagram.com/p/${id}/embed`}
      title={title}
    />
  );
};
