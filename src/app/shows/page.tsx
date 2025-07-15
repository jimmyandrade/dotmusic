import { Container } from '@/libs/shared/ui/components/server/Container';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
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
