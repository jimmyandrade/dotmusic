import {
  Badge,
  Box,
  Flex,
  Heading,
  Section,
  Strong,
  VisuallyHidden,
} from '@radix-ui/themes';
import Link from 'next/link';
import type { FC } from 'react';
import { MusicPage } from '@/libs/music/ui/components/server/MusicPage';
import { Container } from '@/libs/shared/ui/components/server/Container';
import { ConcertsList } from '../libs/concerts/feature/ConcertsList';
import { SubscribeForm } from '../libs/newsletter/SubscribeForm';

const IndexPage: FC = () => {
  return (
    <article id={IndexPage.name}>
      <Box asChild mt="0">
        <header>
          <VisuallyHidden asChild>
            <Heading as="h2">
              <Link href="/">Página inicial</Link>
            </Heading>
          </VisuallyHidden>
        </header>
      </Box>

      <MusicPage />

      <Box position="relative">
        <Container pt="8">
          <Heading as="h2" mb="6">
            Agenda
          </Heading>
          <ConcertsList maxYears={1} />
        </Container>
      </Box>

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

      <Section>
        <Container pt="8">
          <Heading align="center" as="h2" mb="6">
            Assine para receber novidades
          </Heading>
          <Flex asChild gapY="4" direction="column">
            <SubscribeForm />
          </Flex>
        </Container>
      </Section>
    </article>
  );
};

export default IndexPage;
