import { Heading, Theme } from '@radix-ui/themes';
import './global.css';

const title = 'Jimmy Andrade';

export const metadata = {
  title,
  description: 'Website oficial de Jimmy Andrade',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme asChild>
      <html lang="pt-br">
        <body>
          <header>
            <Heading as="h1">{title}</Heading>
          </header>
          <main id="content" role="main" tabIndex={-1}>
            {children}
          </main>
        </body>
      </html>
    </Theme>
  );
}
