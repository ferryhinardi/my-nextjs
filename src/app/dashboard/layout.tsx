import { Inter } from 'next/font/google';

import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daahboard',
  description: 'Description of the dashboard page.',
};

export default function DashboardLayout({ children }: PropsWithChildren<{}>) {
  return children;
}
