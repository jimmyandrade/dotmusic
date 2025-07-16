'use client';

import { Button, type ButtonProps } from '@radix-ui/themes';
import type { FC } from 'react';

type PrintButtonProps = ButtonProps;

export const PrintButton: FC<PrintButtonProps> = ({
  variant = 'ghost',
  ...props
}: Readonly<PrintButtonProps>) => (
  <Button variant={variant} onClick={(): void => window.print()} {...props}>
    Imprimir
  </Button>
);
