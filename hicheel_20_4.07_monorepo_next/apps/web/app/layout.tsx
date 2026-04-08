import './globals.css';

export const metadata = {
  title: 'Web App',
  description: 'Web App app in monorepo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
