import { TabNav, type LinkProps } from '@radix-ui/themes';

export interface TabNavLinkProps extends LinkProps {
  active?: boolean;
}

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
