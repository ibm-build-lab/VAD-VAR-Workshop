import 'server-only';

import merge from 'lodash/merge';
import type { Metadata } from 'next';
import siteConfig from '#site-config';

const {
  name: { title },
  description,
  image
} = siteConfig;

const {
  PORT = 3000,
  NODE_ENV,
  VERCEL_URL,
  NEXT_PUBLIC_BASE_PATH = ''
} = process.env;
const IS_DEV = NODE_ENV === 'development';

const baseMetadata: Metadata = {
  metadataBase: new URL(
    IS_DEV
      ? `http://localhost:${PORT}`
      : `https://${VERCEL_URL}${NEXT_PUBLIC_BASE_PATH}`
  ),
  title: title,
  description: description,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    siteName: title,
    url: '/',
    locale: 'en_US',
    description: description,
    images: image
  },
  twitter: {
    card: 'summary',
    title: title,
    description: description,
    creator: '@ibm',
    images: image
  }
};

/**
 * Helper to merge partial metadata with base metadata
 *
 * @param partialMetadata
 * @returns merged metadata object
 */
export function generateMergedMetadata(partialMetadata: Metadata) {
  return merge(baseMetadata, partialMetadata);
}

export default baseMetadata;
