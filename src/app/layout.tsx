import { Inter } from 'next/font/google';
import PageContainer from './components/PageContainer';
import NavBar from './components/NavBar';
import './globals.css';

import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Description of the homepage',
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageContainer>
          <NavBar />
          {children}
        </PageContainer>
      </body>
    </html>
  );
}
