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
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        url: window.location.href,
      });
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
