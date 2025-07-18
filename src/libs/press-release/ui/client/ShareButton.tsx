'use client';

import { Button, type ButtonProps } from '@radix-ui/themes';
import type { FC } from 'react';

export interface ShareButtonProps extends ButtonProps {
  title: string;
}

export const ShareButton: FC<ShareButtonProps> = ({
  title,
  variant = 'ghost',
  ...props
}: Readonly<ShareButtonProps>) => {
  const handleShare = async (): Promise<void> => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: window.location.href,
        });
      } catch (error) {
        if (
          typeof error === 'object' &&
          error !== null &&
          'name' in error &&
          (error as { name?: string }).name !== 'AbortError'
        ) {
          alert('Erro ao compartilhar.');
        }
      }
    } else {
      alert('Compartilhamento não suportado neste dispositivo.');
    }
  };

  return (
    <Button variant={variant} onClick={handleShare} {...props}>
      Compartilhar
    </Button>
  );
};
