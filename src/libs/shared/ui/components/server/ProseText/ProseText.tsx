import { type TextProps as ProseTextProps, Text } from '@radix-ui/themes';
import type { FC } from 'react';

export type { ProseTextProps };

export const ProseText: FC<ProseTextProps> = ({
  className = '',
  children,
  size,
  ...props
}: Readonly<ProseTextProps>) => (
  <Text
    className={`max-w-prose ${className}`}
    size={
      size ?? {
        initial: '2',
        xs: '3',
        sm: '4',
        md: '5',
        lg: '6',
        xl: '7',
      }
    }
    {...props}
  >
    {children}
  </Text>
);
