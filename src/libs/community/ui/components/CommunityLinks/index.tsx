import { Link } from '@radix-ui/themes';
import { forwardRef, type HTMLAttributes } from 'react';

export interface CommunityLinksProps extends HTMLAttributes<HTMLElement> {
  /**
   * @default false
   */
  asChild?: boolean;
}

// biome-ignore lint/nursery/useExplicitType: forwardRef already defines the type
export const CommunityLinks = forwardRef<HTMLDivElement, CommunityLinksProps>(
  ({ className = '', ...props }, forwardedRef) => (
    <section className={className} {...props} ref={forwardedRef}>
      <ul className={'flex flex-col gap-y-2'}>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://www.cameo.com/jimmyandrade'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Cameo: encomende vídeos'}
          >
            📹 Cameo: encomende vídeos
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://whatsapp.com/channel/0029VaCfLrV3GJP7GDZA5l1Q'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Canal no WhatsApp'}
          >
            💬 Canal no WhatsApp
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={'https://t.me/+xcKd-SaXUT0zY2Q5'}
            rel={'noopener noreferrer'}
            target={'_blank'}
            title={'Canal no Telegram'}
          >
            💬 Canal no Telegram
          </Link>
        </li>
        <li>
          <Link
            className={'links-section-button'}
            href={'/'}
            rel={'home'}
            target={'_self'}
            title={'JimmyAndrade.music'}
          >
            🏠 Acesse JimmyAndrade.music
          </Link>
        </li>
      </ul>
    </section>
  ),
);
CommunityLinks.displayName = 'CommunityLinks';
