import { type LinkProps, TabNav } from '@radix-ui/themes';
import type { FC } from 'react';

export interface TabNavLinkProps extends LinkProps {
  active?: boolean;
}

export const TabNavLink: FC<TabNavLinkProps> = ({
  asChild,
  active,
  className = '',
  children,
  ...props
}: Readonly<TabNavLinkProps>) => (
  <TabNav.Link
    asChild={asChild}
    active={active}
    className={className}
    {...props}
  >
    {children}
  </TabNav.Link>
);
