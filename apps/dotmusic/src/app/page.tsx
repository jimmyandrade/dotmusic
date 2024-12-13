import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Kbd,
  Section,
  Select,
  TextField,
  VisuallyHidden,
} from '@radix-ui/themes';
import Link from 'next/link';

export default function Index() {
  const videoId = 'E_sZHM53ekE';
  const baseURL = `https://www.youtube.com/embed/${videoId}`;
  const url = new URL(baseURL);
  const props = {
    autoplay: '1',
    cc_load_policy: '0',
    controls: '0',
    // disablekb: '1',
    end: '170',
    fs: '0',
    iv_load_policy: '3',
    loop: '0',
    modestbranding: '1',
    mute: '1',
    origin: 'https://jimmyandrade.music',
    playsinline: '1',
    rel: '0',
    showinfo: '0',
    si: 'd0DqYlNSYNIMIW-1',
    start: '146',
  };
  Object.entries(props).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  return (
    <article>
      <VisuallyHidden asChild>
        <Heading as="h2">
          <Link href="/">Página inicial</Link>
        </Heading>
      </VisuallyHidden>
      <Box asChild>
        <section>
          <VisuallyHidden asChild>
            <Heading as="h2">
              Vídeo de <cite>Ultimato.</cite>
            </Heading>
          </VisuallyHidden>
          <Box
            className="aspect-video"
            overflow="hidden"
            minHeight="0"
            maxWidth="100%"
            position="relative"
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0 aspect-video"
              referrerPolicy="strict-origin-when-cross-origin"
              src={url.toString()}
              title="YouTube video player"
            />
          </Box>
        </section>
      </Box>
      <Section>
        <Container>
          <Heading as="h2" mb="6">
            Agenda
          </Heading>
          <Box>
            <Heading as="h3" mb="4">
              2024
            </Heading>
            <ul className="columns-3">
              <li itemScope itemType="https://schema.org/MusicEvent">
                <a
                  href="https://www.sympla.com.br/evento/festival-ervas/2374798"
                  itemProp="url"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Heading as="h4" itemProp="name" size="4">
                    Festival Ervas
                  </Heading>
                  <time dateTime="2024-04-20T15:30" itemProp="startDate">
                    20 de abril de 2024, às 15:30
                  </time>
                  &nbsp;-&nbsp;
                  <time dateTime="2024-04-20T22:00" itemProp="endDate">
                    22:00
                  </time>
                </a>
              </li>
              <li>Baixo Mezanino</li>
              <li>Festival É POP BH</li>
              <li>Festival do Clima</li>
              <li>Parada do Orgulho LGBTQIAPN+ de Betim</li>
              <li>Parada do Orgulho LGBTQIAPN+ de Belo Horizonte</li>
              <li>After da Parada</li>
              <li>Projeto Recitais (Centro Cultural UFMG)</li>
              <li>Pôr-do-sol no Premium (Premium Estúdio)</li>
              <li>Descontorno Cultural (Centro Cultural Salgado Filho)</li>
              <li>Veganizando (Seu Trem)</li>
            </ul>
          </Box>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading as="h2" mb="6">
            Assine para receber novidades
          </Heading>
          <Flex asChild gapY="4" direction="column">
            <form>
              <Grid asChild columns="3" gapX="4">
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
          <Heading as="h2" mb="6">
            Destaques
          </Heading>
          <Box className="columns-3" asChild>
            <ul>
              <li className="break-inside-avoid">
                <Heading as="h3" className="uppercase" mb="4" size="4">
                  2024: Profissionais da Música
                </Heading>
                <ul>
                  <li>Sudeste - Autor(es) (música e letra)</li>
                  <li>Sudeste - Cantor</li>
                  <li>Sudeste - Produtor(a) musical (single digital)</li>
                  <li>Sudeste - Produtor musical (álbum digital)</li>
                </ul>
              </li>
              <li className="break-inside-avoid">
                <Heading as="h3" className="uppercase" mb="4" size="4">
                  2024: Prêmio Audio For Singers
                </Heading>
                <ul>
                  <li>Melhor Mixagem de Canção</li>
                </ul>
              </li>
            </ul>
          </Box>
        </Container>
      </Section>
    </article>
  );
}
