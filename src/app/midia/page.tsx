import { getPressReleases } from '@/libs/press-releases/data-access/getPressReleases';
import { PressReleaseList } from '@/libs/press-releases/ui/PressReleaseList';
import { Container } from '@/libs/shared/ui/components/server/Container';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { YouTubeVideo } from '@/libs/videos/ui/YouTubeVideo';
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Inset,
  Text,
} from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import pdfIconImage from '../../../public/media/icons/pdf-icon-image.png';

export default function PressPage() {
  const releases = getPressReleases();
  return (
    <article id={PressPage.name}>
      <PageHeader>
        <PageHeading>Mídia</PageHeading>
      </PageHeader>
      <Container>
        <Grid columns={{ xs: '1', sm: '3fr 1fr' }}>
          <Box>
            <Heading as="h3" mb="4">
              Fotos em alta resolução
            </Heading>
            <Grid asChild columns="3">
              <ul>
                <li>
                  <Card asChild>
                    <Link
                      download="Jimmy Andrade - Foto de divulgação - Créditos para Rafael Sandim.jpg"
                      href="/media/press/jimmy-andrade-perto-de-tv-de-tubo-antiga.jpg"
                      target="_blank"
                    >
                      <figure>
                        <Inset clip="padding-box" pb="current" side="top">
                          <picture>
                            <Image
                              alt="Foto de divulgação de Jimmy Andrade"
                              className="block object-cover w-full"
                              height={2546}
                              src="/media/press/jimmy-andrade-perto-de-tv-de-tubo-antiga.jpg"
                              width={3931}
                            />
                          </picture>
                        </Inset>

                        <Flex asChild gap="2" direction="row" align="baseline">
                          <figcaption>
                            <Badge>Retrato (horizontal)</Badge>
                            <Text mb="4" size="1">
                              Créditos da foto: Rafael Sandim
                            </Text>
                          </figcaption>
                        </Flex>
                      </figure>

                      <Text as="p" mb="4">
                        Foto recomendada para materiais relacionados a
                        videoclipes e nostalgia.
                      </Text>
                      <Button asChild variant="soft">
                        <span>Baixar em alta resolução</span>
                      </Button>
                    </Link>
                  </Card>
                </li>
              </ul>
            </Grid>

            <Heading as="h3" mt="8" mb="4">
              Vídeos de shows
            </Heading>
            <Heading as="h4" mb="4">
              Ao Vivo no Centro Cultural UFMG (<time dateTime="2024">2024</time>
              )
            </Heading>
            <Grid asChild columns={{ xs: '1', sm: '2' }} gap="2">
              <ul>
                <Card asChild>
                  <li>
                    <YouTubeVideo className="aspect-video" id="BeHjYXsjoUU" />
                  </li>
                </Card>
                <Card asChild>
                  <li>
                    <YouTubeVideo className="aspect-video" id="hmoJUNWfHoU" />
                  </li>
                </Card>
              </ul>
            </Grid>
            <Heading as="h4" mb="4" mt="6">
              Show na Autêntica (<time dateTime="2023">2023</time>)
            </Heading>
            <Grid asChild columns={{ xs: '1', sm: '2' }} gap="2">
              <ul>
                <Card asChild>
                  <li>
                    <YouTubeVideo className="aspect-video" id="_bqLZtpIU7E" />
                  </li>
                </Card>
                <Card asChild>
                  <li>
                    <YouTubeVideo className="aspect-video" id="68Cj9G3vrXw" />
                  </li>
                </Card>
                <Card asChild>
                  <li>
                    <YouTubeVideo className="aspect-video" id="ALgoFiSamS0" />
                  </li>
                </Card>
                <Card asChild>
                  <li>
                    <YouTubeVideo className="aspect-video" id="pfHoyHbzwiI" />
                  </li>
                </Card>
              </ul>
            </Grid>
          </Box>
          <Box asChild>
            <aside>
              <Heading as="h3" mb="4">
                <i lang="en">Downloads</i>
              </Heading>
              <Grid asChild gapY="2">
                <ul>
                  <li>
                    <Card asChild>
                      <Link
                        href="https://yzcskyrl4tqqw3un.public.blob.vercel-storage.com/media/documents/jimmy-andrade-clipping.pdf"
                        target="_blank"
                      >
                        <Flex gap="1">
                          <Image alt="Ícone de PDF" src={pdfIconImage} />
                          <i lang="en">Clipping</i>
                        </Flex>
                      </Link>
                    </Card>
                  </li>
                  <li>
                    <Card asChild>
                      <Link
                        href="https://yzcskyrl4tqqw3un.public.blob.vercel-storage.com/media/documents/jimmy-andrade-release.pdf"
                        target="_blank"
                      >
                        <Flex gap="1">
                          <Image alt="Ícone de PDF" src={pdfIconImage} />
                          <i lang="en">Release</i>
                        </Flex>
                      </Link>
                    </Card>
                  </li>
                </ul>
              </Grid>
              <Heading as="h3" mt="8" mb="4">
                Releases
              </Heading>
              <PressReleaseList releases={releases} />
            </aside>
          </Box>
        </Grid>
      </Container>
    </article>
  );
}
