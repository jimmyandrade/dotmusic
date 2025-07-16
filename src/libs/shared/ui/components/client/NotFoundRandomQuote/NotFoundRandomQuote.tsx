'use client';

import {
  Blockquote,
  type BlockquoteProps as NotFoundRandomQuoteProps,
} from '@radix-ui/themes';
import { type FC, type JSX, useEffect, useState } from 'react';

export type { NotFoundRandomQuoteProps };

export const NotFoundRandomQuote: FC<NotFoundRandomQuoteProps> = (
  props: Readonly<NotFoundRandomQuoteProps>,
) => {
  const [randomQuote, setRandomQuote] = useState<JSX.Element>(
    <p aria-hidden={true}>
      {' '}
      <progress />
      <br />
      <progress />
    </p>,
  );

  useEffect(() => {
    const quotes = [
      <>
        Só eu sei o quanto eu sofri pra chegar até aqui&hellip;
        <br />
        <ins class="no-underline">e não encontrar nada interessante</ins>
      </>,
      <>
        Não sei seu nome / De onde é que vem / O que faz aqui / Se tá tudo
        bem&hellip;
        <br />
        Mas eu só sei que quando eu te vi, tive certeza que era{' '}
        <ins class="no-underline">o erro 404</ins>
      </>,
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  return <Blockquote {...props}>{randomQuote}</Blockquote>;
};
