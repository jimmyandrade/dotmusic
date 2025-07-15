import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { Container } from '@radix-ui/themes';

export default function SongsPage() {
  return (
    <article id={SongsPage.name}>
      <PageHeader>
        <PageHeading>Música</PageHeading>
      </PageHeader>
      <Container />
    </article>
  );
}
