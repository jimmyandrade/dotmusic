import { Box, Grid, Heading, Link } from '@radix-ui/themes';
import Image from 'next/image';
import type { FC } from 'react';
import { VisuallyHidden } from '@/libs/shared/ui/components/server/VisuallyHidden';

export const MusicGrid: FC = () => (
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
);
