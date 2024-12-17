import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './global.css';
import type { Metadata, Viewport } from 'next';
import { Albert_Sans } from 'next/font/google';
import { SiteFooter } from '../libs/shared/ui/SiteFooter';
import { SiteHeader } from '../libs/shared/ui/SiteHeader';
import { MainContent } from '../libs/shared/ui/MainContent';
import { type ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import getManifest from './manifest';

const albertSans = Albert_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-albert-sans',
});

const manifestData = getManifest();

export const metadata: Metadata = {
  title: `${manifestData.name} - ${manifestData.description}`,
  description:
    'Website oficial do cantor, compositor e produtor musical Jimmy Andrade. Artista de indie, pop e rock brasileiro. Escute suas músicas, consulte sua agenda e obtenha outras informações sobre a sua música.',
  applicationName: manifestData.name,
  openGraph: {
    siteName: manifestData.name,
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  userScalable: true,
  width: 'device-width',
};

export interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Theme asChild appearance="dark" hasBackground accentColor="red">
      <html className={albertSans.variable} lang="pt-br">
        <body className="font-sans overscroll-y-none">
          <SiteHeader />
          <MainContent>{children}</MainContent>
          <SiteFooter />
          <Analytics />
        </body>
      </html>
    </Theme>
  );
}
