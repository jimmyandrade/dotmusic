import { Container, PageHeader, PageHeading } from '@jimmyandrade/ui/server';
import { ConcertsList } from '../../libs/concerts/feature/ConcertsList';

export default async function ConcertsPage() {
  return (
    <article id={ConcertsPage.name}>
      <PageHeader>
        <PageHeading>Shows</PageHeading>
      </PageHeader>
      <Container>
        <ConcertsList />
      </Container>
    </article>
  );
}
