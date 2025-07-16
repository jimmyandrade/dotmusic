import {
  AspectRatio,
  Container,
  Em,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from '@radix-ui/themes';
import Image from 'next/image';
import type { FC } from 'react';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { ProseText } from '@/libs/shared/ui/components/server/ProseText';
import { YouTubeVideo } from '@/libs/videos/ui/YouTubeVideo';

const QuemEuSouPage: FC = () => {
  return (
    <article id={QuemEuSouPage.displayName}>
      <PageHeader>
        <PageHeading>Quem Eu Sou</PageHeading>
      </PageHeader>

      <Container>
        <AspectRatio ratio={16 / 9}>
          <YouTubeVideo
            allowFullScreen={true}
            autoPlay={true}
            class="aspect-video object-fill absolute"
            controls={true}
            id={'ejz5D4xWDXA'}
            loop={true}
            muted={false}
            playsInline={true}
            showInfo={false}
            showRelated={false}
            title={`Videoclipe de 'Quem Eu Sou' no YouTube`}
          />
        </AspectRatio>
        {/* <Link
          href="https://music.lnk.to/QZYQE4"
          rel="noopener noreferrer"
          target="_blank"
        >
          <VideoBanner
            alt="Quem Eu Sou"
            imageSources={{
              // landscape: '/media/song/apple-music/landscape.png',
              // portrait: '/media/song/apple-music/portrait.png',
              square: '/media/song/apple-music/square.png',
            }}
            videoSources={{
              // landscape:
              //   'https://yzcskyrl4tqqw3un.public.blob.vercel-storage.com/media/music/quem-eu-sou-landscape.mp4',
              // portrait:
              //   'https://yzcskyrl4tqqw3un.public.blob.vercel-storage.com/media/music/quem-eu-sou-portrait.mp4',
              square:
                'https://yzcskyrl4tqqw3un.public.blob.vercel-storage.com/media/music/quem-eu-sou-square.mp4',
            }}
          />
        </Link> */}

        <Section>
          <Container>
            {/* <ProseText as="p" className="pb-8">
              Idealizado por <Strong>Jimmy Andrade</Strong>, é um projeto
              musical e artístico que celebra a autenticidade, a pluralidade e o
              autoconhecimento através da música. Nascido da necessidade de
              expressar questões fundamentais sobre identidade e existência, o
              projeto se materializa em diferentes formatos que se complementam
              e ampliam seu alcance. QUEM EU SOU? é uma plataforma de diálogo,
              conscientização e celebração da diversidade. Através da música e
              da arte, buscamos criar espaços de acolhimento, representatividade
              e transformação, onde cada pessoa possa se reconhecer e se sentir
              verdadeiramente livre para ser quem é.
            </ProseText> */}
            <Heading as="h3">
              O <Em lang="en">single</Em>
            </Heading>
            <ProseText as="p" class="pb-6">
              O <Em lang="en">single</Em> <cite>Quem Eu Sou</cite> é a música
              que dá nome ao projeto e foi lançada em{' '}
              <time dateTime="2024-06-28">28 de junho de 2024</time>, Dia do
              Orgulho LGBTQIAPN+. A canção traz temas como amor próprio,
              resistência e diversidade, propondo uma reflexão sobre a
              importância de sermos nós mesmas em um mundo cada vez mais difícil
              para pessoas <Em>Queer</Em>.
            </ProseText>
            <Flex gap="6" direction="column">
              <Heading as="h4">Artistas participantes do single</Heading>
              <Grid asChild columns={'2'} gap="4">
                <Text asChild size="6">
                  <ul>
                    <li>Beto Maia Filho</li>
                    <li>Jimmy Andrade</li>
                    <li>Lua Zanella</li>
                    <li>Rodrigo Rasec</li>
                    <li>Samantha Carpinelli</li>
                    <li>Vini Justino</li>
                  </ul>
                </Text>
              </Grid>
              <Image
                alt="Artistas que cantaram 'Quem Eu Sou' Ao Vivo na Parada LGBTQIAPN+ de Belo Horizonte"
                height={2730}
                src="/media/songs/quem-eu-sou/artistas-que-cantaram-quem-eu-sou-ao-vivo-na-parada-bh.jpg"
                width={4096}
              />
            </Flex>
          </Container>
        </Section>

        <Section id="artistas"></Section>
      </Container>
    </article>
  );
};

QuemEuSouPage.displayName = 'QuemEuSouPage';
export default QuemEuSouPage;
