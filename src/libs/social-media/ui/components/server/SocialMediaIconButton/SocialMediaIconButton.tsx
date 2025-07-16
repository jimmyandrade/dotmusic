import {
  IconButton as PrimitiveIconButton,
  type IconButtonProps as SocialMediaIconButtonProps,
} from '@radix-ui/themes';
import type { FC } from 'react';

export type { SocialMediaIconButtonProps };

export const SocialMediaIconButton: FC<SocialMediaIconButtonProps> = ({
  children,
  color = 'gray',
  highContrast,
  size = {
    initial: '1',
    sm: '2',
  },
  variant = 'ghost',
  ...props
}: Readonly<SocialMediaIconButtonProps>) => (
  <PrimitiveIconButton
    color={color}
    highContrast={highContrast}
    size={size}
    variant={variant}
    {...props}
  >
    {children}
  </PrimitiveIconButton>
);
