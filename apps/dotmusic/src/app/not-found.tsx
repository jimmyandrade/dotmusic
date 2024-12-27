import { NotFoundRandomQuote } from '@jimmyandrade/ui';
import {
  Container,
  PageHeader,
  PageHeading,
  ProseText,
} from '@jimmyandrade/ui/server';
import { Flex, Link, Section } from '@radix-ui/themes';

export default function NotFoundPage() {
  return (
    <article id={NotFoundPage.name}>
      <PageHeader>
        <PageHeading>Página não encontrada</PageHeading>
      </PageHeader>
      <Container>
        <Flex mt={'4'} gapY={'4'} direction={'column'}>
          <ProseText>A página que você está procurando não existe.</ProseText>
          <ul>
            <li>
              {/* The Link component from `next/link` should not be used here, otherwise page will not redirect. */}
              <Link href={'/'} rel={'home'} underline="always">
                Voltar para o início
              </Link>{' '}
              provavelmente vai te ajudar;
            </li>
          </ul>
        </Flex>
        <Section asChild>
          <footer>
            <NotFoundRandomQuote />
          </footer>
        </Section>
      </Container>
    </article>
  );
}
