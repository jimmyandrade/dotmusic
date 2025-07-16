import { Section } from '@radix-ui/themes';
import type { FC } from 'react';
import { MusicGrid } from '@/libs/music/ui/components/server/MusicGrid';
import SpotifyEmbed from '@/libs/music/ui/components/server/SpotifyEmbed';
import { MusicAppLinks } from '@/libs/music-app-links/ui/components/MusicAppLinks';
import { Container } from '@/libs/shared/ui/components/server/Container';

const MusicPage: FC = () => (
  <>
    <MusicGrid />
    <Section>
      <Container>
        <MusicAppLinks />
        <SpotifyEmbed
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO33QWgb?utm_source=generator&theme=0"
          title="This Is Jimmy Andrade"
          height={400}
        />
      </Container>
    </Section>
  </>
);

MusicPage.displayName = 'MusicPage';
export { MusicPage };
export default MusicPage;
