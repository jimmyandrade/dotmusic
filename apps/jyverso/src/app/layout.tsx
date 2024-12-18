import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme asChild appearance="dark" hasBackground accentColor="purple">
      <html lang="pt-br">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </Theme>
  );
}
