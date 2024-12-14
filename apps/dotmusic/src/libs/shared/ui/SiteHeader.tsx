import {
  Box,
  Card,
  Flex,
  Heading,
  Inset,
  Link,
  Theme,
  VisuallyHidden,
} from '@radix-ui/themes';
import { Container } from './Container';
import { SocialMediaLinks } from '../../social-media-links';
import { NavLinks } from './NavLinks';
import NextLink from 'next/link';

export const SiteHeader = () => (
  <Box asChild position="fixed" width="100%" className="z-10" top="-1px">
    <Theme radius="none">
      <Card
        asChild
        className="relative"
        size={{
          initial: '1',
          sm: '2',
          md: '3',
          lg: '4',
        }}
      >
        <header itemScope itemType="http://schema.org/WPHeader" role="banner">
          <Container>
            <Flex justify="between" align="center">
              <Heading
                as="h1"
                className="uppercase"
                size={{ initial: '1', sm: '2', md: '3', lg: '4', xl: '5' }}
              >
                <Link asChild color="gray" underline="hover" highContrast>
                  <NextLink href="/" scroll>
                    Jimmy Andrade
                  </NextLink>
                </Link>
              </Heading>
              <VisuallyHidden asChild>
                <a href="#content">Pular para o conteúdo principal</a>
              </VisuallyHidden>
              <Inset>
                <div className="hidden md:block">
                  <NavLinks />
                </div>
              </Inset>
              <div className="sm:block">
                <SocialMediaLinks.Root />
              </div>
            </Flex>
          </Container>
        </header>
      </Card>
    </Theme>
  </Box>
);
