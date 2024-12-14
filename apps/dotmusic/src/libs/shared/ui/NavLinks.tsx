'use client';

import { TabNav } from '@radix-ui/themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <TabNav.Root
      aria-label="Navegação principal"
      className="uppercase min-h-11"
      size={{
        initial: '1',
        sm: '2',
      }}
    >
      <TabNav.Link asChild active={pathname === '/'}>
        <Link href="/" title="Início">
          Início
        </Link>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname === '/musica'}>
        <Link href="/musica">Música</Link>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname === '/shows'}>
        <Link href="/shows">Shows</Link>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname === '/bio'}>
        <Link href="/bio">Bio</Link>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname === '/midia'}>
        <Link href="/midia">Mídia</Link>
      </TabNav.Link>
    </TabNav.Root>
  );
};
