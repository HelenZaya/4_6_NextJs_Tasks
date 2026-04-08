import './globals.css';

export const metadata = {
  title: 'Task2 Advanced Routing + UI Engineering',
  description: 'Nested routes, parallel routes, route groups, and design system demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
