import { Container } from '@radix-ui/themes';
import type { FC } from 'react';
import { MusicPage } from '@/libs/music/ui/components/server/MusicPage';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';

const SongsPage: FC = () => {
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
};

export default SongsPage;
