import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SessionProvider } from 'next-auth/react';

export const metadata = {
  title: 'Shelter Haven - Penginapan Green Coffee',
  description: 'Penginapan premium dengan tema green coffee',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="font-sans">
        <SessionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
