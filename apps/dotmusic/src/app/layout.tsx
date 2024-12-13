import {
  Box,
  Container,
  Flex,
  Heading,
  TabNav,
  Theme,
  VisuallyHidden,
} from '@radix-ui/themes';
import Link from 'next/link';
import '@radix-ui/themes/styles.css';
import './global.css';
import type { Metadata, Viewport } from 'next';
import { SocialMediaLinks } from '../features/social-media-links';

const applicationName = 'Jimmy Andrade';

export const metadata: Metadata = {
  title:
    'Jimmy Andrade - Website oficial: Música, Agenda de Shows, Vídeos, Notícias e Biografia',
  description:
    'Website oficial do cantor, compositor e produtor musical Jimmy Andrade. Artista de indie, pop e rock brasileiro. Escute suas músicas, consulte sua agenda e obtenha outras informações sobre a sua música.',
  appleWebApp: {
    capable: true,
    title: applicationName,
  },
  applicationName,
  openGraph: {
    siteName: applicationName,
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  userScalable: true,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme asChild appearance="dark" hasBackground>
      <html lang="pt-br">
        <body>
          <Box asChild position="fixed" width="100%" className="z-10 bg-black">
            <header>
              <Container>
                <Flex>
                  <Heading as="h1" size="1">
                    <Link href="/">Jimmy Andrade</Link>
                  </Heading>
                  <VisuallyHidden asChild>
                    <a href="#content">Pular para o conteúdo principal</a>
                  </VisuallyHidden>
                  <TabNav.Root aria-label="Navegação principal">
                    <TabNav.Link asChild>
                      <Link href="/">Início</Link>
                    </TabNav.Link>
                    <TabNav.Link asChild>
                      <Link href="/musica">Música</Link>
                    </TabNav.Link>
                    <TabNav.Link asChild>
                      <Link href="/bio">
                        Bio&nbsp;e&nbsp;
                        <em className="not-italic" lang="en">
                          Releases
                        </em>
                      </Link>
                    </TabNav.Link>
                    <TabNav.Link asChild>
                      <Link href="/midia">Mídia</Link>
                    </TabNav.Link>
                  </TabNav.Root>
                  <SocialMediaLinks />
                </Flex>
              </Container>
            </header>
          </Box>
          <main id="content" role="main" tabIndex={-1}>
            {children}
          </main>
          <footer>
            <Container>
              <Flex justify="between">
                <p>
                  2008-2024 Jimmy Andrade Produção Fonográfica, Musical e
                  Marketing.
                </p>
                <Flex asChild>
                  <SocialMediaLinks />
                </Flex>
              </Flex>
            </Container>
          </footer>
        </body>
      </html>
    </Theme>
  );
}
