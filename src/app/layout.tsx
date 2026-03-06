import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import SupabaseProvider from '../providers/SupabaseProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'QueryBuddy',
  description: 'Streamline your database queries with intuitive management tools for developers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SupabaseProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
}