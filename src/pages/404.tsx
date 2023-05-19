import React, { useEffect } from 'react';
import { HeadFC, PageProps, navigate } from 'gatsby';
import SEO from '../components/SEO';

const NotFoundPage: React.FC<PageProps> = () => {
  useEffect(() => {
    navigate('/en');
  }, []);

  return null;
};

export default NotFoundPage;

// SEO
export const Head: HeadFC = () => {
  return <SEO {...{ title: 'Not Found' }} />;
};
