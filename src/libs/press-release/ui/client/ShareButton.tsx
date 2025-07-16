'use client';

import { Button, type ButtonProps } from '@radix-ui/themes';
import type { FC } from 'react';

type ShareButtonProps = Readonly<
  {
    title: string;
  } & ButtonProps
>;

export const ShareButton: FC<ShareButtonProps> = ({
  title,
  variant = 'ghost',
  ...props
}) => {
  const handleShare = async () => {
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
