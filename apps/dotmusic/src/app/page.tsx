import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Kbd,
  Section,
  Select,
  Strong,
  TextField,
  VisuallyHidden,
} from '@radix-ui/themes';
import Link from 'next/link';
import { ConcertsList } from '../libs/concerts/feature/ConcertsList';
import { YouTubeVideo } from '../libs/videos/ui/YouTubeVideo';
import Image from 'next/image';
import { SpotifyLogo } from '../libs/music-app-links/ui/SpotifyLogo';
import { AppleMusicLogo } from '../libs/music-app-links/ui/AppleMusicLogo';
import { DeezerLogo } from '../libs/music-app-links/ui/DeezerLogo';
import { AmazonMusicLogo } from '../libs/music-app-links/ui/AmazonMusicLogo';
import { Container } from '../libs/shared/ui/Container';

export default async function Index() {
  return (
    <article>
      <Box asChild pt={{ initial: '8', md: '0' }}>
        <header>
          <VisuallyHidden asChild>
            <Heading as="h2">
              <Link href="/">Página inicial</Link>
            </Heading>
          </VisuallyHidden>
        </header>
      </Box>

      <AspectRatio ratio={16 / 9}>
        <YouTubeVideo
          className="h-full object-cover w-full"
          // end={170}
          id="E_sZHM53ekE"
          playsInline={false}
          showInfo={false}
          showRelated={false}
          // start={146}
          title="Videoclipe de 'Ultimato.', de Jimmy Andrade, no YouTube"
        />
      </AspectRatio>
      <Box asChild>
        <section>
          <VisuallyHidden asChild>
            <Heading as="h2">Músicas</Heading>
          </VisuallyHidden>
          <Grid
            asChild
            columns={{
              xs: '2',
              sm: '3',
              md: '6',
            }}
          >
            <ul>
              <li>
                <Link href="/quem-eu-sou">
                  <Image
                    alt="Capa do single 'Quem Eu Sou', de Jimmy Andrade"
                    className="album-cover"
                    height={3000}
                    src="/media/songs/quem-eu-sou/capa-do-single-quem-eu-sou.png"
                    width={3000}
                  />
                </Link>
              </li>
              <li>
                <Link href="/ultimato">
                  <Image
                    alt="Capa do single 'Ultimato.', de Jimmy Andrade. Nele, Jimmy está de perfil, usando uma roupa preta. Arte com a letra U em volta de Jimmy."
                    className="album-cover"
                    height={3000}
                    priority={true}
                    src="/media/songs/ultimato/capa-do-single-ultimato.png"
                    width={3000}
                  />
                </Link>
              </li>

              <li>
                <Link href="/sinceramente">
                  <Image
                    alt="Capa do single 'Sinceramente', de Jimmy Andrade."
                    className="album-cover"
                    height={3000}
                    src="/media/songs/sinceramente/capa-do-single-sinceramente.png"
                    width={3000}
                  />
                </Link>
              </li>
              <li>
                <Link href="/o-que-me-faz-maior">
                  <Image
                    alt="Capa do single 'O Que Me Faz Maior', de Jimmy Andrade. Jimmy está olhando para cima, com cabelo rosa, uma sombra azul, com a letra O estilizada."
                    className="album-cover"
                    height={3000}
                    src="/media/songs/o-que-me-faz-maior/capa-do-single-o-que-me-faz-maior.jpg"
                    width={3000}
                  />
                </Link>
              </li>
              <li>
                <Link href="/um-plano">
                  <Image
                    alt="Capa do single 'Um Plano', de Jimmy Andrade. Jimmy está em uma biblioteca escuta, com duas luzes em seu rosto. À sua frente, uma letra U estilizada."
                    className="album-cover"
                    height={3000}
                    src="/media/songs/um-plano/capa-do-single-um-plano.png"
                    width={3000}
                  />
                </Link>
              </li>
              <li>
                <Link href="/duvida">
                  <Image
                    alt="Capa do single '? (Dúvida)', de Jimmy Andrade. Nele, Jimmy está com cabelo rosa, segurando um microfone vintage."
                    className="album-cover"
                    height={3000}
                    src="/media/songs/duvida/capa-do-single-duvida.jpg"
                    width={3000}
                  />
                </Link>
              </li>
            </ul>
          </Grid>
        </section>
      </Box>
      <Section>
        <Container>
          <Heading align="center" as="h2" mb="6">
            Música
          </Heading>
          <Grid
            asChild
            columns={{
              xs: '1',
              sm: '2',
              md: '4',
            }}
            gap="4"
            mb="8"
          >
            <ul>
              <li>
                <Card asChild size="2">
                  <a
                    href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO33QWgb?si=f6ab48fbfd2049f4"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Jimmy Andrade &ndash; Spotify"
                  >
                    <SpotifyLogo className="h-6 mx-auto" />
                  </a>
                </Card>
              </li>
              <li>
                <Card asChild size="2">
                  <a
                    href="https://music.apple.com/br/artist/jimmy-andrade/678083982"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Jimmy Andrade &ndash; Apple Music"
                  >
                    <AppleMusicLogo className="h-5 mb-1 mx-auto" />
                  </a>
                </Card>
              </li>
              <li>
                <Card asChild size="2">
                  <a
                    href="https://deezer.page.link/i8bLNCwPcLDG2Qua6"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Jimmy Andrade &ndash; Deezer"
                  >
                    <DeezerLogo className="h-6 mx-auto" />
                  </a>
                </Card>
              </li>
              <li>
                <Card asChild size="2">
                  <a
                    href="https://music.amazon.com.br/artists/B00HT9E0C4"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Jimmy Andrade &ndash; Amazon Music"
                  >
                    <AmazonMusicLogo className="h-6 mx-auto" />
                  </a>
                </Card>
              </li>
            </ul>
          </Grid>
          <iframe
            className="rounded-2xl border-0 h-[400px] w-full bg-black"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO33QWgb?utm_source=generator&theme=0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Container>
      </Section>

      <Box position="relative">
        {/* <Image
          alt="Imagem de divulgação do evento 'Premium Estúdio'"
          height={4000}
          src="/media/concerts/premium-estudio/premium-estudio.png"
          width={6000}
        /> */}
        {/* <YouTubeVideo
          allowFullScreen={false}
          autoPlay={true}
          className="h-full object-fill w-full aspect-video absolute pointer-events-none opacity-25"
          controls={false}
          id="hmoJUNWfHoU"
          loop={true}
          muted={true}
          playsInline={true}
          showInfo={false}
          start={21}
        /> */}
        <Container pt="8">
          <Heading as="h2" mb="6">
            Agenda
          </Heading>

          <ConcertsList maxYears={2} />
        </Container>
      </Box>

      <Section>
        <Container pt="8">
          <Heading align="center" as="h2" mb="6">
            Assine para receber novidades
          </Heading>
          <Flex asChild gapY="4" direction="column">
            <form>
              <Grid
                asChild
                columns={{
                  initial: '1',
                  sm: '3',
                }}
                gap="4"
              >
                <fieldset>
                  <TextField.Root
                    id="email"
                    autoComplete="email"
                    autoCorrect="off"
                    name="email"
                    placeholder="Seu e-mail"
                    required
                    size="3"
                    type="email"
                  ></TextField.Root>
                  <TextField.Root
                    id="tel"
                    autoComplete="tel-national"
                    autoCorrect="off"
                    name="tel"
                    placeholder="Seu telefone"
                    required
                    size="3"
                    type="tel"
                  ></TextField.Root>
                  <Select.Root autoComplete="address-level1" required size="3">
                    <Select.Trigger placeholder="Escolha seu estado&hellip;" />
                    <Select.Content className="w-full">
                      <Select.Group>
                        <Select.Item value="BR-MG">
                          MG - Minas Gerais
                        </Select.Item>
                        <Select.Item value="BR-SP">SP - São Paulo</Select.Item>
                      </Select.Group>
                    </Select.Content>
                  </Select.Root>
                </fieldset>
              </Grid>

              <Box asChild>
                <small>
                  Ao fornecer essas informações, você está optando em receber
                  e-mails e/ou ligações e mensagens de texto de{' '}
                  <strong>Jimmy&nbsp;Andrade</strong>&nbsp;com notícias, ofertas
                  especiais, promoções e mensagens criadas para seus interesses,
                  e você aceita a nossa Política de Privacidade e nossos Termos
                  de Uso. O consentimento não é uma condição para compra e não é
                  exigido para utilizar nossos serviços. A frequência de
                  mensagens pode variar. Responda <Kbd>pare</Kbd> a qualquer
                  momento para parar de receber nossas&nbsp;comunicações.
                </small>
              </Box>
              <Box className="mx-auto">
                <Button type="submit">Assinar</Button>
              </Box>
            </form>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading align="center" as="h2" mb="6">
            Destaques
          </Heading>
          <Box className="sm:columns-2 xl:columns-3" asChild>
            <ul>
              <li className="break-inside-avoid mb-8">
                <Heading as="h3" className="uppercase" mb="2" size="4">
                  2024: Profissionais da Música
                </Heading>
                <ul>
                  <li>
                    Sudeste - Autor(es) (música e letra){' '}
                    <Badge variant="soft">Indicado</Badge>
                  </li>
                  <li>
                    Sudeste - Cantor <Badge variant="soft">Indicado</Badge>
                  </li>
                  <li>
                    Sudeste - Produtor musical{' '}
                    <Badge variant="soft">Indicado</Badge>
                  </li>
                </ul>
              </li>
              <li className="break-inside-avoid mb-8">
                <Heading as="h3" className="uppercase" mb="2" size="4">
                  2024: Prêmio Audio For Singers
                </Heading>
                <ul>
                  <li>
                    Melhor Mixagem de Canção{' '}
                    <Badge variant="surface" highContrast>
                      Premiado
                    </Badge>
                  </li>
                </ul>
              </li>

              <li className="break-inside-avoid mb-8">
                <Heading as="h3" className="uppercase" mb="2" size="4">
                  2024: 3&ordf; Edição do Festival{' '}
                  <span className="uppercase">
                    É Pop <abbr title="Belo Horizonte">BH</abbr>
                  </span>
                </Heading>
                <ul>
                  <li>
                    Artista de Música Pop Autoral{' '}
                    <Badge variant="soft">Semifinalista</Badge>
                  </li>
                </ul>
              </li>

              <li className="break-inside-avoid mb-8">
                <Heading as="h3" className="uppercase" mb="2" size="4">
                  2023: Prêmios Butterfly
                </Heading>
                <ul>
                  <li>
                    Melhor na Música em Belo Horizonte{' '}
                    <Badge variant="soft">2&ordm; Lugar</Badge>
                  </li>
                  <li>
                    Madrinhas e Padrinhos Butterfly{' '}
                    <Badge variant="surface">Honrado</Badge>
                  </li>
                </ul>
              </li>
              <li className="break-inside-avoid mb-8">
                <Heading as="h3" className="uppercase" mb="2" size="4">
                  2019: Prêmio Biscoito
                </Heading>
                <ul>
                  <li>
                    Bonde do Ano (<Strong>Não Somos Irmãos</Strong>){' '}
                    <Badge variant="soft">Indicado</Badge>
                  </li>
                </ul>
              </li>
            </ul>
          </Box>
        </Container>
      </Section>
    </article>
  );
}
