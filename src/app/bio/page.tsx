import { Container, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import type { FC } from 'react';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { ProseText } from '@/libs/shared/ui/components/server/ProseText';

const BioPage: FC = () => {
  return (
    <article id={BioPage.name}>
      <PageHeader>
        <PageHeading>
          Quem é <strong>Jimmy Andrade</strong>?
        </PageHeading>
      </PageHeader>
      <Container>
        <Flex direction="column" gapY="4">
          <ProseText as="p">
            Cantor, compositor e produtor musical. Nasceu em{' '}
            <time dateTime="1989-05-27">27 de maio de 1989</time> em Minas
            Novas, uma cidade localizada na região do Vale do Jequitinhonha, em
            Minas Gerais, conhecida por sua riqueza cultural.
          </ProseText>

          <Image
            src={'/media/press/jimmy-andrade-perto-de-tv-de-tubo-antiga.jpg'}
            alt={'Jimmy Andrade perto de TV de tubo antiga'}
            width={1600}
            height={1067}
            className="mb-6 rounded-xl object-cover w-full h-auto"
            priority
          />

          <ProseText as="p" size="3">
            Jimmy Andrade é um artista não-binário (parte da População
            LGBTQIAPN+) do gênero de indie pop brasileiro, residente em Belo
            Horizonte (MG). Citado por Ricardo Koctus, baixista da Pato Fu como
            o "próximo Cazuza", suas músicas abraçam temas de identidade,
            autoamor e orgulho, com uma combinação de rock, pop e influências de
            folk, country e gêneros alternativos, como darkwave e trip-hop. Em
            2016, lançou seu primeiro álbum, "Entre o Não e o Querer" -
            produzido com mentoria de Pedro Peixoto (engenheiro indicado ao
            Grammy Latino).
          </ProseText>
          <ProseText as="p" size="3">
            Estreou nos palcos de Belo Horizonte em 2018, no Festival @bsurda, a
            maior festa LGBTQIAPN+ de Minas Gerais. Desde então, se apresenta em
            festivais ("Circuito Movimento", "Ervas", "Violarte", "Festivale"),
            teatros, centros culturais ("CCUFMG") e casas de shows ("Autêntica",
            "O Gueto").
          </ProseText>
          <ProseText as="p" className="pb-6" size="3">
            Em junho de 2022, participou da ação "Feat Store" do Mercado Livre,
            em que gravou um feat da música "Mais Uma Voz", com Pabllo Vittar,
            para campanha de marketing da empresa. Em 2023, recebeu indicação à
            categoria "Melhor na Música em Belo Horizonte" (Prêmios Butterfly),
            e em 2024 sua música "Sincera/Mente", produzida por indicados ao
            Grammy Latino, conquistou o prêmio de "Melhor Mixagem de Canção"
            (Audio for Singers). As músicas são escritas e co-produzidas pelo
            próprio artista, que é filiado à UBC (União Brasileira de
            Compositores).
          </ProseText>
        </Flex>
      </Container>
    </article>
  );
};

export default BioPage;
