import { Card, Grid } from '@radix-ui/themes';
import type { FC } from 'react';
import { AmazonMusicLogo } from '../AmazonMusicLogo';
import { AppleMusicLogo } from '../AppleMusicLogo';
import { DeezerLogo } from '../DeezerLogo';
import { SpotifyLogo } from '../SpotifyLogo';

export const MusicAppLinks: FC = () => (
  <Grid
    asChild
    columns={{
      xs: '1',
      sm: '2',
      md: '4',
    }}
    gap="4"
    mb="8"
  >
    <ul>
      <li>
        <Card asChild size="2">
          <a
            href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO33QWgb?si=f6ab48fbfd2049f4"
            rel="noopener noreferrer"
            target="_blank"
            title="Jimmy Andrade &ndash; Spotify"
          >
            <SpotifyLogo className="h-6 mx-auto" />
          </a>
        </Card>
      </li>
      <li>
        <Card asChild size="2">
          <a
            href="https://music.apple.com/br/artist/jimmy-andrade/678083982"
            rel="noopener noreferrer"
            target="_blank"
            title="Jimmy Andrade &ndash; Apple Music"
          >
            <AppleMusicLogo className="h-5 mb-1 mx-auto" />
          </a>
        </Card>
      </li>
      <li>
        <Card asChild size="2">
          <a
            href="https://deezer.page.link/i8bLNCwPcLDG2Qua6"
            rel="noopener noreferrer"
            target="_blank"
            title="Jimmy Andrade &ndash; Deezer"
          >
            <DeezerLogo className="h-6 mx-auto" />
          </a>
        </Card>
      </li>
      <li>
        <Card asChild size="2">
          <a
            href="https://music.amazon.com.br/artists/B00HT9E0C4"
            rel="noopener noreferrer"
            target="_blank"
            title="Jimmy Andrade &ndash; Amazon Music"
          >
            <AmazonMusicLogo className="h-6 mx-auto" />
          </a>
        </Card>
      </li>
    </ul>
  </Grid>
);
