import { Container, Heading, Theme, VisuallyHidden } from '@radix-ui/themes';
import Link from 'next/link';
import '@radix-ui/themes/styles.css';
import './global.css';

export const metadata = {
  title:
    'Jimmy Andrade - Website oficial: Música, Agenda de Shows, Vídeos, Notícias e Biografia',
  description:
    'Website oficial do cantor, compositor e produtor musical Jimmy Andrade. Artista de indie, pop e rock brasileiro. Escute suas músicas, consulte sua agenda e obtenha outras informações sobre a sua música.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme asChild hasBackground>
      <html lang="pt-br">
        <body className="bg-black text-white">
          <header>
            <Container>
              <Heading as="h1">
                <Link href="/">Jimmy Andrade</Link>
              </Heading>
              <VisuallyHidden asChild>
                <a href="#content">Pular para o conteúdo principal</a>
              </VisuallyHidden>
              <nav aria-label="Navegação">
                <ul>
                  <li>
                    <Link href="/">Início</Link>
                  </li>
                  <li>
                    <Link href="/musica">Música</Link>
                  </li>
                  <li>
                    <Link href="/bio">
                      Bio&nbsp;e&nbsp;
                      <em className="not-italic" lang="en">
                        Releases
                      </em>
                    </Link>
                  </li>
                  <li>
                    <Link href="/midia">Mídia</Link>
                  </li>
                </ul>
              </nav>
            </Container>
          </header>
          <main id="content" role="main" tabIndex={-1}>
            {children}
          </main>
        </body>
      </html>
    </Theme>
  );
}
