import React from 'react';
import { useTranslation } from 'react-i18next';
import useSiteMetadata from '@hooks/useSiteMetaData';

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

const SEO = (props: SEOProps) => {
  const { title, description, pathname, children } = props;
  const { description: defDescription, title: defTitle, origin } = useSiteMetadata();
  const {
    i18n: { language }
  } = useTranslation();

  const seo = {
    title: title || defTitle,
    description: description || defDescription,
    url: `${origin}${pathname || ''}`
  };

  return (
    <>
      <html lang={language} />
      <link
        rel='icon'
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"
      />
      <title>{seo.title}</title>
      <link rel='canonical' href={seo.url} />
      <meta name='description' content={seo.description} />

      <meta property='og:title' content={seo.title} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:type' content='website' />
      <meta property='og:description' content={seo.description} />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:url' content={seo.url} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:site' content={'https://www.ibm.com'} />
      <meta name='twitter:creator' content={'@IBM'} />
      {children}
    </>
  );
};

export default SEO;
