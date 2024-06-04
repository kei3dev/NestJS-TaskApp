import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'task app',
  description: 'This is task app',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ChakraProvider cssVarsRoot="body">{children}</ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
