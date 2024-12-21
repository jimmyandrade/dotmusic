import { Em, Heading, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './global.css';
import Link from 'next/link';
import {
  HeaderHomeLink,
  MainContent,
  SiteFooter,
  SiteHeader,
  SiteNavigation,
  TabNavLink,
} from '@jimmyandrade/ui/server';
import { BrandText } from '../components/BrandText';

export const metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme asChild appearance="light" hasBackground accentColor="purple">
      <html>
        <body>
          <SiteHeader>
            <HeaderHomeLink>
              <BrandText />
            </HeaderHomeLink>
            <Heading as="h1" size="1">
              <Link href="/"></Link>
            </Heading>
            <SiteNavigation aria-label="Navegação principal">
              <TabNavLink asChild>
                <Link href="/">Início</Link>
              </TabNavLink>
              <TabNavLink asChild>
                <Link href="/sobre">Sobre</Link>
              </TabNavLink>
              <TabNavLink asChild>
                <Link href="/musica">Música</Link>
              </TabNavLink>
              <TabNavLink asChild>
                <Link href="/disco">Disco</Link>
              </TabNavLink>
              <TabNavLink asChild>
                <Link href="/tour">
                  <Em lang="en">Tour</Em>
                </Link>
              </TabNavLink>
            </SiteNavigation>
          </SiteHeader>
          <MainContent>{children}</MainContent>
          <SiteFooter />
        </body>
      </html>
    </Theme>
  );
}
