import {
  IconButton as PrimitiveIconButton,
  type IconButtonProps,
} from '@radix-ui/themes';

export const IconButton = ({
  children,
  color = 'gray',
  highContrast,
  size = {
    initial: '1',
    sm: '2',
  },
  variant = 'ghost',
  ...props
}: IconButtonProps) => (
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
