import { PageHeader, PageHeading } from '@jimmyandrade/ui/server';
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
