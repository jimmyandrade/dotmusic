import { AccessibleIcon, Flex, type FlexProps } from '@radix-ui/themes';
import { IconButton } from './IconButton';
import { InstagramIcon } from './InstagramIcon';
import { TikTokIcon } from './TikTokIcon';
import { YouTubeIcon } from './YouTubeIcon';

export const Root = ({
  asChild = true,
  className,
  gap = '4',
  ...props
}: FlexProps) => (
  <Flex asChild={asChild} className={className} gap={gap} {...props}>
    <ul>
      <li>
        <IconButton asChild>
          <a
            href="https://instagram.com/jimmyandrade"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AccessibleIcon label="Instagram">
              <InstagramIcon className="social-media-icon" />
            </AccessibleIcon>
          </a>
        </IconButton>
      </li>
      <li>
        <IconButton asChild>
          <a
            href="https://tiktok.com/@jimmyandrademusic"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AccessibleIcon label="TikTok">
              <TikTokIcon className="social-media-icon" />
            </AccessibleIcon>
          </a>
        </IconButton>
      </li>
      <li>
        <IconButton asChild>
          <a
            href="https://youtube.com/jimmyandrade"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AccessibleIcon label="YouTube">
              <YouTubeIcon className="social-media-icon" />
            </AccessibleIcon>
          </a>
        </IconButton>
      </li>

      <li>
        <IconButton asChild>
          <a
            href="https://open.spotify.com/intl-pt/artist/5cXCuau8jCVmsRoFYj5oGB"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AccessibleIcon label="Spotify">
              <InstagramIcon className="social-media-icon" />
            </AccessibleIcon>
          </a>
        </IconButton>
      </li>
      <li>
        <IconButton asChild>
          <a
            href="https://music.apple.com/br/artist/jimmy-andrade/678083982"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AccessibleIcon label="Apple Music">
              <InstagramIcon className="social-media-icon" />
            </AccessibleIcon>
          </a>
        </IconButton>
      </li>
    </ul>
  </Flex>
);
