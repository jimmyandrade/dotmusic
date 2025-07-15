import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { ProseText } from '@/libs/shared/ui/components/server/ProseText';
import { Container, Flex } from '@radix-ui/themes';

export default function BioPage() {
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
        </Flex>
      </Container>
    </article>
  );
}
