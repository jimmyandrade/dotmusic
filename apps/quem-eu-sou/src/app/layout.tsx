import {
  GlobalFooter,
  GlobalHeader,
  GlobalRootLayout,
  HeaderHomeLink,
  MainContent,
} from '@jimmyandrade/ui/server';
import { Inset, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { BrandText } from '../components/BrandText';
import './global.css';

import { SocialMediaLinks } from '@jimmyandrade/social-media-ui/server';
import { QuemEuSouNavLinks } from '../components/QuemEuSouNavLinks/QuemEuSouNavLinks';

export const metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme asChild appearance="light" hasBackground accentColor="purple">
      <GlobalRootLayout>
        <GlobalHeader>
          <HeaderHomeLink>
            <BrandText />
          </HeaderHomeLink>
          <Inset>
            <div className="hidden md:block">
              <QuemEuSouNavLinks />
            </div>
          </Inset>
          <div className="hidden md:block">
            <SocialMediaLinks />
          </div>
          <Inset>
            <SocialMediaLinks />
          </Inset>
        </GlobalHeader>
        <MainContent>{children}</MainContent>
        <GlobalFooter>
          <SocialMediaLinks />
        </GlobalFooter>
      </GlobalRootLayout>
    </Theme>
  );
}
