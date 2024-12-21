import { TabNav } from '@radix-ui/themes';
import { type ComponentProps } from 'react';

export interface TabNavLinkProps extends ComponentProps<typeof TabNav.Link> {}

export const TabNavLink = ({
  asChild,
  active,
  className = '',
  children,
  ...props
}: TabNavLinkProps) => (
  <TabNav.Link
    asChild={asChild}
    active={active}
    className={className}
    {...props}
  >
    {children}
  </TabNav.Link>
);
