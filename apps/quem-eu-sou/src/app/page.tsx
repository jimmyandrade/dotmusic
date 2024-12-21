import { Container, InstagramMedia } from '@jimmyandrade/ui/server';
import {
  AspectRatio,
  Box,
  Button,
  Card,
  Em,
  Grid,
  Heading,
  Section,
  Strong,
  Text,
  VisuallyHidden,
} from '@radix-ui/themes';
import Link from 'next/link';
import Image from 'next/image';
import { BrandText } from '../components/BrandText';

export default function IndexPage() {
  const instagramMedia = {
    C90ftgPylR1:
      "Cantando o single 'Quem Eu Sou' na Parada do Orgulho LGBTQIAPN+ de Belo Horizonte",
    C9vVCCIPYrF:
      "Público cantando 'Quem Eu Sou' na Parada do Orgulho LGBTQIAPN+ de Belo Horizonte",
  };

  return (
    <div id={IndexPage.name}>
      <VisuallyHidden asChild>
        <Heading as="h2">Página inicial</Heading>
      </VisuallyHidden>
      <Image
        alt="Artistas que cantaram 'Quem Eu Sou' Ao Vivo na Parada LGBTQIAPN+ de Belo Horizonte"
        height={2730}
        src="/artistas-que-cantaram-quem-eu-sou-ao-vivo-na-parada-bh.jpg"
        width={4096}
      />
      <Container>
        <Grid asChild columns={'3'} gap={'1'}>
          <ul>
            <Card asChild>
              <li>
                <Text as="p" mb={'1'}>
                  <abbr title="a hashtag QUEM EU SOU? Tour">
                    #QuemEuSouTour
                  </abbr>{' '}
                  no Instagram
                </Text>
                <Button asChild>
                  <Link
                    href="https://www.instagram.com/explore/search/keyword/?q=%23quemeusoutour"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ver posts
                  </Link>
                </Button>
              </li>
            </Card>

            <Card asChild className="h-full">
              <li>
                <Text as="p" mb={'1'}>
                  <Em lang="en">Playlist</Em> <BrandText /> no Spotify
                </Text>
                <Button asChild>
                  <Link
                    href="https://open.spotify.com/playlist/4gEHuLcJegImyunC9prd1D?si=eaa24c27d24f432e"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ouvir playlist
                  </Link>
                </Button>
              </li>
            </Card>
            <Card asChild className="h-full">
              <li>
                <Text as="p" mb={'1'}>
                  Ouvir <Strong>Jimmy Andrade</Strong> nas plataformas
                </Text>
                <Button asChild>
                  <Link
                    href="https://jimmyandrade.music/musica?utm_source=quem-eu-sou&utm_medium=card&utm_campaign=explore&utm_term=Escute+Jimmy+Andrade+nas+plataformas+de+m%C3%BAsica&utm_content=IndexPage"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ouvir
                  </Link>
                </Button>
              </li>
            </Card>
          </ul>
        </Grid>
      </Container>

      <Section>
        <Container>
          <Grid asChild columns={'3'}>
            <ul>
              {Object.entries(instagramMedia).map(([id, title]) => (
                <Box asChild key={id} width={'320px'} height={'374px'}>
                  <li>
                    <AspectRatio ratio={320 / 374}>
                      <InstagramMedia
                        className="h-full w-full"
                        id={id}
                        title={title}
                      />
                    </AspectRatio>
                  </li>
                </Box>
              ))}
            </ul>
          </Grid>
        </Container>
      </Section>

      <Section id="artistas">
        <Heading as="h2">Artistas</Heading>
        <Grid asChild columns={'2'}>
          <ul>
            <li>Beto Maia Filho</li>
            <li>Jimmy Andrade</li>
            <li>
              <Heading as="h3">Lua Zanella</Heading>
              <AspectRatio ratio={1 / 1}>
                <Image
                  alt="Lua Zanella"
                  height={900}
                  src="https://yt3.googleusercontent.com/iFRtrkMFLY71UeH-KHLZkDZK6cXfhxlSRynONXGYn9NEGw4Zm1l1TWLeBVF9eADSXYw6wtKV-w8=s900-c-k-c0x00ffffff-no-rj"
                  width={900}
                />
              </AspectRatio>
            </li>
            <li>Rodrigo Rasec</li>
            <li>Samantha Carpinelli</li>
            <li>Vini Justino</li>
          </ul>
        </Grid>
      </Section>
    </div>
  );
}
