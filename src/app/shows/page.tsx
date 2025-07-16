import { Container } from '@/libs/shared/ui/components/server/Container';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { YouTubeVideo } from '@/libs/videos/ui/YouTubeVideo';
import { ConcertsList } from '../../libs/concerts/feature/ConcertsList';

export default async function ConcertsPage() {
  return (
    <article id={ConcertsPage.name}>
      <YouTubeVideo
        allowFullScreen={false}
        autoPlay={true}
        className="aspect-video h-full w-full object-fill fixed pointer-events-none opacity-25"
        controls={false}
        id="hmoJUNWfHoU"
        loop={true}
        muted={true}
        playsInline={true}
        showInfo={false}
        start={21}
      />
      <PageHeader>
        <PageHeading>Shows</PageHeading>
      </PageHeader>
      <Container>
        <ConcertsList />
      </Container>
    </article>
  );
}
