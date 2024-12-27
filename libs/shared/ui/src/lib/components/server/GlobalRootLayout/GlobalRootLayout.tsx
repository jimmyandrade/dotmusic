import '@radix-ui/themes/styles.css';

import classNames from 'classnames';
import { type HTMLAttributes } from 'react';
import { contentAnchorName } from '../../../constants';
import { VisuallyHidden } from '../VisuallyHidden';

export type GlobalRootLayoutProps = HTMLAttributes<HTMLHtmlElement>;

export const GlobalRootLayout = ({
  className = '',
  children,
  dir = 'ltr',
  id = 'root',
  prefix = 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#',
  ...props
}: GlobalRootLayoutProps) => (
  <html
    className={classNames('scroll-smooth', className)}
    dir={dir}
    id={id}
    prefix={prefix}
    {...props}
  >
    <body className="font-sans m-0" key="body">
      <noscript dangerouslySetInnerHTML={{ __html: '<!--googleoff: all-->' }} />
      <VisuallyHidden asChild>
        <a href={`#${contentAnchorName}`}>Pular para o conteúdo principal</a>
      </VisuallyHidden>
      <noscript dangerouslySetInnerHTML={{ __html: '<!--googleon: all-->' }} />
      {children}
      <noscript dangerouslySetInnerHTML={{ __html: '<!--googleoff: all-->' }} />
      <div
        id="wp-a11y-speak-polite"
        aria-live="polite"
        aria-relevant="additions text"
        aria-atomic="true"
        className="screen-reader-text wp-a11y-speak-region"
      />
      <div
        id="wp-a11y-speak-assertive"
        aria-live="assertive"
        aria-relevant="additions text"
        aria-atomic="true"
        className="screen-reader-text wp-a11y-speak-region"
      />
      <noscript dangerouslySetInnerHTML={{ __html: '<!--googleon: all-->' }} />
    </body>
  </html>
);
