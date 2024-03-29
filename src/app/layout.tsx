import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

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
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
