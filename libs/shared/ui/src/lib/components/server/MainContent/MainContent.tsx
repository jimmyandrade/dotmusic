import { Box } from '@radix-ui/themes';
import { type HTMLAttributes, type ReactNode } from 'react';

export interface MainContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const MainContent = ({
  children,
  id = 'content',
  role = 'main',
  tabIndex = -1,
  ...props
}: MainContentProps) => (
  <Box asChild minHeight={'100vh'} {...props}>
    <main id={id} role={role} tabIndex={tabIndex}>
      {children}
    </main>
  </Box>
);
