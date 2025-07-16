import { Box, type BoxProps as MainContentProps } from '@radix-ui/themes';
import type { FC } from 'react';
import {
  contentAnchorName,
  globalHeaderHeightInPixels,
} from '../../../constants';

export type { MainContentProps };

export const MainContent: FC<MainContentProps> = ({
  children,
  id = contentAnchorName,
  minHeight = '100vh',
  pt = globalHeaderHeightInPixels,
  role = 'main',
  tabIndex = -1,
  ...props
}: Readonly<MainContentProps>) => (
  <Box
    asChild
    id={id}
    minHeight={minHeight}
    pt={pt}
    role={role}
    tabIndex={tabIndex}
    {...props}
  >
    <main>{children}</main>
  </Box>
);
