import './global.css';

const title = 'Jimmy Andrade';

export const metadata = {
  title,
  description: 'Website oficial de Jimmy Andrade',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <h1>{title}</h1>
        </header>
        <main id="content" role="main" tabIndex={-1}>{children}</main></body>
    </html>
  );
}
