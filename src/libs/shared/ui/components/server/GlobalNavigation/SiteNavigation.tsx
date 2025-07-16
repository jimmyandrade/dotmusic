import { TabNav } from '@radix-ui/themes';
import type { ComponentProps, ReactNode } from 'react';

export interface SiteNavigationProps
  extends ComponentProps<typeof TabNav.Root> {
  /**
   * @required
   */
  'aria-label': string;
  children: ReactNode;
}

export const SiteNavigation = ({
  'aria-label': ariaLabel,
  children,
  className,
  itemScope = true,
  itemType = 'http://schema.org/SiteNavigationElement',
  size,
  ...props
}: SiteNavigationProps) => (
  <TabNav.Root
    aria-label={ariaLabel}
    className={`h-11 uppercase ${className}`}
    itemScope={itemScope}
    itemType={itemType}
    size={
      size ?? {
        initial: '1',
        sm: '2',
      }
    }
    {...props}
  >
    {children}
  </TabNav.Root>
);
