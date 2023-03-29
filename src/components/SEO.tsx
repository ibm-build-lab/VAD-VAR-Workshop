import React from 'react';
import useSiteMetadata from '../helpers/useSiteMetaData';

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

const SEO = (props: SEOProps) => {
  const { title, description, pathname, children } = props;
  const { description: defDescription, title: defTitle, siteUrl } = useSiteMetadata();

  const seo = {
    title: title || defTitle,
    description: description || defDescription,
    url: `${siteUrl}${pathname || ''}`
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:url' content={seo.url} />
      <meta name='twitter:description' content={seo.description} />
      <link
        rel='icon'
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🧞</text></svg>"
      />
      {children}
    </>
  );
};

export default SEO;
