import { Box } from '@radix-ui/themes';
import { type ReactNode } from 'react';

export interface MainContentProps {
  children: ReactNode;
}

export const MainContent = ({ children }: MainContentProps) => (
  <Box asChild minHeight={'100vh'} pt="8">
    <main id="content" role="main" tabIndex={-1}>
      {children}
    </main>
  </Box>
);
