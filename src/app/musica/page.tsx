import { Container } from '@radix-ui/themes';
import { MusicPage } from '@/libs/music/ui/components/server/MusicPage';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';

export default function SongsPage() {
  return (
    <article id={SongsPage.name}>
      <PageHeader>
        <PageHeading>Música</PageHeading>
      </PageHeader>
      <Container>
        <MusicPage />
      </Container>
    </article>
  );
}
