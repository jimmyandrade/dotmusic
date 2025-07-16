'use client';

import { AspectRatio } from '@radix-ui/themes';
import { getImageProps, type ImageProps } from 'next/image';
import { useMemo } from 'react';

enum Orientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
}

type SourceSet = {
  [key in Orientation]: string;
};

export interface VideoBannerProps extends Omit<ImageProps, 'src'> {
  alt: string;
  imageSources: Partial<SourceSet>;
  videoSources?: Partial<SourceSet>;
}

const mediaDimensions: Record<
  Orientation,
  { width: number; height: number; media: string }
> = {
  [Orientation.Portrait]: {
    width: 1080,
    height: 1920,
    media: `(orientation: portrait)`,
  },
  [Orientation.Landscape]: {
    width: 1300,
    height: 740,
    media: `(orientation: landscape)`,
  },
  [Orientation.Square]: {
    width: 1080,
    height: 1080,
    media: `(min-aspect-ratio: 1/1)`,
  },
};

export const VideoBanner = ({
  alt,
  imageSources,
  videoSources,
}: VideoBannerProps) => {
  if (!imageSources) {
    throw new Error(
      'The `imageSources` property is required and must include sources for all orientations.',
    );
  }

  const mediaConfig = useMemo(
    () => ({
      [Orientation.Portrait]: {
        ...getImageProps({
          src: imageSources[Orientation.Portrait],
          ...mediaDimensions[Orientation.Portrait],
          alt,
        }).props,
      },
      [Orientation.Landscape]: {
        ...getImageProps({
          src: imageSources[Orientation.Landscape],
          ...mediaDimensions[Orientation.Landscape],
          alt,
        }).props,
      },
      [Orientation.Square]: {
        ...getImageProps({
          src: imageSources[Orientation.Square],
          ...mediaDimensions[Orientation.Square],
          alt,
        }).props,
      },
    }),
    [alt, imageSources],
  );

  const commonVideoProps = {
    autoPlay: true,
    controls: false,
    controlsList: 'nodownload nofullscreen noremoteplayback',
    disablePictureInPicture: true,
    disableRemotePlayback: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: 'auto',
  };

  const aspectRatios: Record<Orientation, number> = {
    [Orientation.Landscape]:
      mediaDimensions[Orientation.Landscape].width /
      mediaDimensions[Orientation.Landscape].height,
    [Orientation.Portrait]:
      mediaDimensions[Orientation.Portrait].width /
      mediaDimensions[Orientation.Portrait].height,
    [Orientation.Square]: 1 / 1,
  };

  return (
    <>
      <AspectRatio ratio={aspectRatios[Orientation.Landscape]}>
        <video
          crossOrigin="anonymous"
          {...commonVideoProps}
          poster={mediaConfig[Orientation.Landscape].src}
        >
          {videoSources ? (
            <source
              src={videoSources[Orientation.Landscape]}
              type="video/mp4"
            />
          ) : null}
        </video>
      </AspectRatio>
      <AspectRatio ratio={aspectRatios[Orientation.Portrait]}>
        <video
          crossOrigin="anonymous"
          {...commonVideoProps}
          poster={mediaConfig[Orientation.Portrait].src}
        >
          {videoSources ? (
            <source src={videoSources[Orientation.Portrait]} type="video/mp4" />
          ) : null}
        </video>
      </AspectRatio>
      <AspectRatio ratio={aspectRatios[Orientation.Square]}>
        <video
          crossOrigin="anonymous"
          {...commonVideoProps}
          poster={mediaConfig[Orientation.Square].src}
        >
          {videoSources ? (
            <source src={videoSources[Orientation.Square]} type="video/mp4" />
          ) : null}
        </video>
      </AspectRatio>
    </>
  );
};

//
// import classNames from 'classnames';
// import { ImageProps, getImageProps } from 'next/image';
// import { useEffect, useMemo, useRef, useState } from 'react';

// enum VideoState {
//   Idle = 'idle',
//   Loading = 'loading',
//   ReadyToPlay = 'readyToPlay',
// }

//    // Ensure `alt` is a required non-empty string
//   defaultOrientation?: Orientation; // Default orientation if undetermined

// export const VideoBanner = ({
//   alt,
//   defaultOrientation = Orientation.Square,

//   const [videoState, setVideoState] = useState<VideoState>(VideoState.Idle);
//   const [orientation, setOrientation] =
//     useState<Orientation>(defaultOrientation);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const shouldShowFallbackImage = videoSources
//     ? videoState === VideoState.ReadyToPlay
//     : false;

//   const FallbackImage = ({
//     'aria-hidden': ariaHidden,
//   }: Partial<ImageProps>) => (
//     <img
//       className={classNames(
//         mediaConfig[orientation].className,
//         // 'duration-500 h-full left-0 top-0 transition-opacity w-full',
//       )}
//       height={mediaConfig[orientation].height}
//       src={mediaConfig[orientation].src}
//       srcSet={mediaConfig[orientation].srcSet}
//       width={mediaConfig[orientation].width}
//       alt={alt}
//       aria-hidden={ariaHidden}
//     />
//   );

//   const isPortrait = useMediaQuery(mediaDimensions[Orientation.Portrait].media);
//   const isLandscape = useMediaQuery(
//     mediaDimensions[Orientation.Landscape].media,
//   );

//   // Function to set orientation using MediaQueryList API
//   useEffect(() => {
//     if (!videoSources) {
//       setOrientation(defaultOrientation);
//       return;
//     }

//     const updateOrientation = () => {
//       if (isPortrait) {
//         setOrientation(Orientation.Landscape);
//       } else if (isLandscape) {
//         setOrientation(Orientation.Portrait);
//       } else {
//         setOrientation(defaultOrientation);
//       }
//     };

//     // Set initial orientation
//     updateOrientation();
//   }, [defaultOrientation, isLandscape, isPortrait, videoSources]);

//   // Handle video loading and state changes
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleCanPlay = () => setVideoState(VideoState.ReadyToPlay);
//     const handleLoadStart = () => setVideoState(VideoState.Loading);

//     video.addEventListener('canplay', handleCanPlay);
//     video.addEventListener('loadstart', handleLoadStart);

//     return () => {
//       video.removeEventListener('canplay', handleCanPlay);
//       video.removeEventListener('loadstart', handleLoadStart);
//     };
//   }, []);

//   useEffect(() => {
//     if (videoRef.current) {
//       // videoRef.current.load();
//     }
//   }, [orientation]);

//   return (
//     <div
//       className="relative"
//       data-orientation={orientation}
//       data-ratio={AspectRatios[orientation]}
//     >
//       <picture>
//         {Object.entries(mediaDimensions).map(([key, { media }]) => (
//           <source
//             key={key}
//             media={media}
//             type="image/png"
//             srcSet={imageSources[key as Orientation]}
//             height={mediaConfig[key as Orientation].height}
//             width={mediaConfig[key as Orientation].width}
//             style={mediaConfig[key as Orientation].style}
//           />
//         ))}
//         <FallbackImage aria-hidden={shouldShowFallbackImage} />
//       </picture>

//       {videoSources && (
//         <video
//           autoPlay
//           className={classNames(
//             'absolute left-0 top-0 w-full h-full object-cover transition-opacity',
//             // 'absolute border duration-500 inset-0 left-0 object-cover ',
//             {
//               'opacity-100': videoState === VideoState.ReadyToPlay,
//               'opacity-0': videoState !== VideoState.ReadyToPlay,
//             },
//           )}

//           ref={videoRef}
//         >
//           <source
//             height={mediaDimensions[orientation].height}
//             media={mediaDimensions[orientation].media}
//             src={videoSources[orientation]}

//             width={mediaDimensions[orientation].width}
//           />
//           <FallbackImage aria-hidden={false} />
//         </video>
//       )}
//     </div>
//   );
// };
