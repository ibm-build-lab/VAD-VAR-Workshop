import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.scss';
import baseMetadata from '#/shared-metadata';

interface RootLayoutProps {
  children: ReactNode;
}

/**
 * SEO metadata
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return <html>{children}</html>;
}
