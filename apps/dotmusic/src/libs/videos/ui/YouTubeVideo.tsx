import { type IframeHTMLAttributes } from 'react';

export interface YouTubeVideoProps
  extends IframeHTMLAttributes<HTMLIFrameElement> {
  autoPlay?: boolean;
  controls?: boolean | '0' | '1' | '2';
  end?: number;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  showInfo?: boolean;
  showRelated?: boolean;
  start?: number;
}

export const YouTubeVideo = ({
  allowFullScreen = true,
  autoPlay = false,
  className,
  controls = true,
  end,
  id,
  loop = false,
  muted = false,
  playsInline = false,
  showInfo = false,
  showRelated = false,
  start = 0,
  title = 'YouTube video player',
  ...props
}: YouTubeVideoProps) => {
  const baseURL = `https://www.youtube.com/embed/${id}`;
  const url = new URL(baseURL);
  const searchParams = {
    autoplay: autoPlay ? '1' : '0',
    // cc_load_policy: '0',
    controls: typeof controls === 'boolean' ? (controls ? '1' : '0') : controls,
    // disablekb: '1',
    enablejsapi: '1',
    end: end?.toString(),
    feature: 'oembed',
    fs: allowFullScreen ? '1' : '0',
    // iv_load_policy: '3',
    loop: loop ? '1' : '0',
    modestbranding: '1',
    mute: muted ? '1' : '0',
    // origin: 'https://jimmyandrade.music',
    playsinline: playsInline ? '1' : '0',
    rel: showRelated ? '1' : '0',
    showinfo: showInfo ? '1' : '0',
    start: start.toString(),
  };

  Object.entries(searchParams).forEach(([key, value]) => {
    if (typeof value !== 'undefined') {
      url.searchParams.append(key, value);
    }
  });

  const allow = [
    'accelerometer',
    'clipboard-write',
    'encrypted-media',
    'gyroscope',
    'picture-in-picture',
    'web-share',
  ];
  if (allowFullScreen) {
    allow.push('fullscreen');
  }
  if (autoPlay) {
    allow.push('autoplay');
  }

  return (
    <iframe
      id={`youtube-${id}`}
      allow={allow.join('; ')}
      className={`border-0 overflow-hidden ${className}`}
      referrerPolicy="strict-origin-when-cross-origin"
      seamless
      src={url.toString()}
      title={title}
      {...props}
    />
  );
};
