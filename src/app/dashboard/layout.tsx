import React, { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import NavBar from '../components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export default function DashboardLayout(props: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Include shared UI here e.g. a header or sidebar */}
        <NavBar />
        {props.children}
      </body>
    </html>
  );
}
