import './globals.css';

export const metadata = {
  title: 'Admin App',
  description: 'Admin App app in monorepo',
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
