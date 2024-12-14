import { ConcertsList } from '../../libs/concerts/feature/ConcertsList';
import { Container } from '../../libs/shared/ui/Container';
import { PageHeader } from '../../libs/shared/ui/PageHeader';
import { PageHeading } from '../../libs/shared/ui/PageHeading';

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
