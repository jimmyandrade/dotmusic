import {
  GlobalFooter,
  GlobalHeader,
  GlobalRootLayout,
  HeaderHomeLink,
  MainContent,
} from '@jimmyandrade/ui/server';
import { Strong, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Analytics } from '@vercel/analytics/react';
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme asChild appearance="dark" hasBackground accentColor="purple">
      <GlobalRootLayout>
        <GlobalHeader>
          <HeaderHomeLink>
            <Strong>JYVERSO</Strong>
          </HeaderHomeLink>
        </GlobalHeader>
        <MainContent>{children}</MainContent>
        <GlobalFooter />
        <Analytics />
      </GlobalRootLayout>
    </Theme>
  );
}
