import { Container } from '@/libs/shared/ui/components/server/Container';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { YouTubeVideo } from '@/libs/videos/ui/YouTubeVideo';
import {
  Badge,
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

export default function PressPage() {
  return (
    <article id={PressPage.name}>
      <PageHeader>
        <PageHeading>Mídia</PageHeading>
      </PageHeader>
      <Container>
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
                    Foto recomendada para materiais relacionados a videoclipes e
                    nostalgia.
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
          Ao Vivo no Centro Cultural UFMG (<time dateTime="2024">2024</time>)
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
      </Container>
    </article>
  );
}
