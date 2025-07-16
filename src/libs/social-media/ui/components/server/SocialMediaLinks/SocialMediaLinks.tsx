import {
  AccessibleIcon,
  Flex,
  type FlexProps as SocialMediaLinksProps,
} from '@radix-ui/themes';
import type { FC } from 'react';
import { InstagramIcon } from '../InstagramIcon';
import { SocialMediaIconButton } from '../SocialMediaIconButton';
import { TikTokIcon } from '../TikTokIcon';
import { YouTubeIcon } from '../YouTubeIcon';

export type { SocialMediaLinksProps };

export const SocialMediaLinks: FC<SocialMediaLinksProps> = ({
  asChild = true,
  className,
  gap = '4',
  ...props
}: Readonly<SocialMediaLinksProps>) => (
  <Flex asChild={asChild} class={className} gap={gap} {...props}>
    <ul>
      <li>
        <SocialMediaIconButton asChild>
          <a
            href="https://instagram.com/jimmyandrade"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AccessibleIcon label="Instagram">
              <InstagramIcon class="social-media-icon" />
            </AccessibleIcon>
          </a>
        </SocialMediaIconButton>
      </li>
      <li>
        <SocialMediaIconButton asChild>
          <a
            href="https://tiktok.com/@jimmyandrademusic"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AccessibleIcon label="TikTok">
              <TikTokIcon class="social-media-icon" />
            </AccessibleIcon>
          </a>
        </SocialMediaIconButton>
      </li>
      <li>
        <SocialMediaIconButton asChild>
          <a
            href="https://youtube.com/jimmyandrade"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AccessibleIcon label="YouTube">
              <YouTubeIcon class="social-media-icon" />
            </AccessibleIcon>
          </a>
        </SocialMediaIconButton>
      </li>
      <li>
        <SocialMediaIconButton asChild>
          <a
            href="https://open.spotify.com/intl-pt/artist/5cXCuau8jCVmsRoFYj5oGB"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AccessibleIcon label="Spotify">
              <InstagramIcon class="social-media-icon" />
            </AccessibleIcon>
          </a>
        </SocialMediaIconButton>
      </li>
      <li>
        <SocialMediaIconButton asChild>
          <a
            href="https://music.apple.com/br/artist/jimmy-andrade/678083982"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AccessibleIcon label="Apple Music">
              <InstagramIcon class="social-media-icon" />
            </AccessibleIcon>
          </a>
        </SocialMediaIconButton>
      </li>
    </ul>
  </Flex>
);
