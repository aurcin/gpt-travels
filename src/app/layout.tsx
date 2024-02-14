import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from '@/providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GPT Travels',
  description: 'Your AI travel planing assistant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
