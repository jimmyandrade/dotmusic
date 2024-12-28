import {
  AccessibleIcon,
  Flex,
  type FlexProps as SocialMediaLinksProps,
} from '@radix-ui/themes';
import { InstagramIcon } from '../InstagramIcon';
import { SocialMediaIconButton } from '../SocialMediaIconButton';
import { TikTokIcon } from '../TikTokIcon';
import { YouTubeIcon } from '../YouTubeIcon';

export { type SocialMediaLinksProps };

export const SocialMediaLinks = ({
  asChild = true,
  className,
  gap = '4',
  ...props
}: SocialMediaLinksProps) => (
  <Flex asChild={asChild} className={className} gap={gap} {...props}>
    <ul>
      <li>
        <SocialMediaIconButton asChild>
          <a
            href="https://instagram.com/jimmyandrade"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AccessibleIcon label="Instagram">
              <InstagramIcon className="social-media-icon" />
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
              <TikTokIcon className="social-media-icon" />
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
              <YouTubeIcon className="social-media-icon" />
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
              <InstagramIcon className="social-media-icon" />
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
              <InstagramIcon className="social-media-icon" />
            </AccessibleIcon>
          </a>
        </SocialMediaIconButton>
      </li>
    </ul>
  </Flex>
);
