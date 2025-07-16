import {
  Box,
  Flex,
  type BoxProps as GlobalFooterProps,
  Link,
  Separator,
  Strong,
  Text,
} from '@radix-ui/themes';
import type { FC } from 'react';
import { Container } from '../Container';

export type { GlobalFooterProps };

export const GlobalFooter: FC<GlobalFooterProps> = ({
  asChild = true,
  children,
  id,
  itemScope = true,
  itemType = 'https://schema.org/WPFooter',
  role = 'contentinfo',
  ...props
}: Readonly<GlobalFooterProps>) => (
  <Box
    asChild={asChild}
    id={id ?? GlobalFooter.name}
    itemScope={itemScope}
    itemType={itemType}
    role={role}
    {...props}
  >
    <footer>
      <Separator size="4" />
      <Container>
        <Flex
          direction={{
            initial: 'column',
            sm: 'row',
          }}
          gap="4"
          justify="between"
          py="4"
        >
          <Flex as="div" direction="column" gapY={{ initial: '4', sm: '2' }}>
            <Text asChild className="max-w-prose" size="1">
              <small>
                <time dateTime="2008">2008</time>&ndash;
                <time dateTime="2014">2024</time>&nbsp;
                <Link href="https://jimmyandrade.music?utm_source=quem-eu-sou&utm_medium=footer&utm_term=Jimmy+Andrade+Produ%C3%A7%C3%A3o+Fonogr%C3%A1fica%2C+Musical+e+Marketing&utm_content=IndexPage">
                  <Strong>Jimmy&nbsp;Andrade</Strong>
                </Link>
                <br className="sm:hidden" /> Produção Fonográfica, Musical
                e&nbsp;Marketing.
              </small>
            </Text>
            <Text asChild className="max-w-prose" size="1">
              <small>
                Todas as imagens, músicas e material audiovisual relacionados a{' '}
                <Strong>Jimmy&nbsp;Andrade</Strong>
                <br /> são protegidos pela Lei de Direitos Autorais.
              </small>
            </Text>
          </Flex>
          {children}
        </Flex>
      </Container>
    </footer>
  </Box>
);
