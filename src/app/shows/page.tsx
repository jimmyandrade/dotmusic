import { Card, Em, Flex, Grid, Link, Text } from '@radix-ui/themes';
import { Container } from '@/libs/shared/ui/components/server/Container';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { ProseText } from '@/libs/shared/ui/components/server/ProseText';
import { YouTubeVideo } from '@/libs/videos/ui/YouTubeVideo';
import { ConcertsList } from '../../libs/concerts/feature/ConcertsList';

export default async function ConcertsPage() {
  return (
    <article id={ConcertsPage.name}>
      <YouTubeVideo
        allowFullScreen={false}
        autoPlay={true}
        className="aspect-video h-full w-full object-fill fixed pointer-events-none opacity-25 -z-10"
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
        <Grid columns={'3fr 1fr 1fr'} gap={'6'}>
          <div>
            <ProseText as="p" className="pb-8" size="4">
              Durante a turnê &ldquo;QUEM EU SOU? - o show&rdquo;, Jimmy Andrade
              compartilha histórias que inspiraram as letras das canções e se
              conecta com seu público. O espetáculo conta com uma banda completa
              e, dependendo do formato, inclui intérpretes de Libras.
            </ProseText>
            <ProseText as="p" className="pb-8" size="4">
              O show convida o público a refletir sobre temas fundamentais para
              a população LGBTQIAPN+, como auto amor, acolhimento, orgulho e a
              celebração da existência.
            </ProseText>
          </div>

          <Flex asChild direction="column" gap="4">
            <ul>
              <li>
                <Card asChild>
                  <Link
                    href="https://www.instagram.com/explore/search/keyword/?q=%23quemeusoutour"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Text as="p" size="3" mb={'1'}>
                      <abbr title="a hashtag QUEM EU SOU? Tour">
                        #QuemEuSouTour
                      </abbr>{' '}
                      no Instagram
                    </Text>
                  </Link>
                </Card>
              </li>

              <li>
                <Card asChild className="h-full">
                  <Link
                    href="https://open.spotify.com/playlist/4gEHuLcJegImyunC9prd1D?si=eaa24c27d24f432e"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Text as="p" size="3" mb={'1'}>
                      Ouvir <Em lang="en">Playlist</Em> no Spotify
                    </Text>
                  </Link>
                </Card>
              </li>
            </ul>
          </Flex>
        </Grid>

        <ConcertsList />
      </Container>
    </article>
  );
}
