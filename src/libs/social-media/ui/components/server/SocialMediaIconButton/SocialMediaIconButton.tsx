import {
  IconButton as PrimitiveIconButton,
  type IconButtonProps as SocialMediaIconButtonProps,
} from '@radix-ui/themes';

export { type SocialMediaIconButtonProps };

export const SocialMediaIconButton = ({
  children,
  color = 'gray',
  highContrast,
  size = {
    initial: '1',
    sm: '2',
  },
  variant = 'ghost',
  ...props
}: SocialMediaIconButtonProps) => (
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
