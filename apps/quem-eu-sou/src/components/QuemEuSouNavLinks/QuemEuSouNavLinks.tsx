import { SiteNavigation, TabNavLink } from '@jimmyandrade/ui/server';
import Link from 'next/link';

export const QuemEuSouNavLinks = () => (
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
        <i className="not-italic" lang="en">
          Tour
        </i>
      </Link>
    </TabNavLink>
  </SiteNavigation>
);
