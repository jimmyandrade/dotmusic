'use client';

import { Button, type ButtonProps } from '@radix-ui/themes';
import type { FC } from 'react';

type PrintButtonProps = ButtonProps;

export const PrintButton: FC<PrintButtonProps> = ({
  variant = 'ghost',
  ...props
}) => (
  <Button variant={variant} onClick={() => window.print()} {...props}>
    Imprimir
  </Button>
);
