import { Flex, Text } from '@radix-ui/themes';
import { Container } from '../../libs/shared/ui/Container';
import { PageHeader } from '../../libs/shared/ui/PageHeader';
import { PageHeading } from '../../libs/shared/ui/PageHeading';

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
          <Text
            as="div"
            className="max-w-prose"
            size={{
              initial: '2',
              xs: '3',
              sm: '4',
              md: '5',
              lg: '6',
              xl: '7',
            }}
          >
            <p>
              Cantor, compositor e produtor musical. Nasceu em{' '}
              <time dateTime="1989-05-27">27 de maio de 1989</time> em Minas
              Novas, uma cidade localizada na região do Vale do Jequitinhonha,
              em Minas Gerais, conhecida por sua riqueza cultural.
            </p>
          </Text>
        </Flex>
      </Container>
    </article>
  );
}
