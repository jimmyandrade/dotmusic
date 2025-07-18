import '@radix-ui/themes/styles.css';

import classNames from 'classnames';
import type { FC, HTMLAttributes } from 'react';
import { contentAnchorName } from '../../../constants';
import { VisuallyHidden } from '../VisuallyHidden';

export type GlobalRootLayoutProps = HTMLAttributes<HTMLHtmlElement>;

export const GlobalRootLayout: FC<GlobalRootLayoutProps> = ({
  className = '',
  children,
  dir = 'ltr',
  lang = 'pt-br',
  id = 'root',
  prefix = 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#',
  ...props
}: Readonly<GlobalRootLayoutProps>) => (
  <html
    className={classNames('scroll-smooth', className)}
    dir={dir}
    lang={lang}
    id={id}
    prefix={prefix}
    {...props}
  >
    <body className="font-sans m-0" key="body">
      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: only used for noscript */}
      <noscript dangerouslySetInnerHTML={{ __html: '<!--googleoff: all-->' }} />
      <VisuallyHidden asChild>
        <a href={`#${contentAnchorName}`}>Pular para o conteúdo principal</a>
      </VisuallyHidden>
      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: only used for noscript */}
      <noscript dangerouslySetInnerHTML={{ __html: '<!--googleon: all-->' }} />
      {children}
      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: only used for noscript */}
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
      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: only used for noscript */}
      <noscript dangerouslySetInnerHTML={{ __html: '<!--googleon: all-->' }} />
    </body>
  </html>
);
