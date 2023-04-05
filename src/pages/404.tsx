import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import SEO from '../components/SEO';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to='/'>Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;

// SEO
export const Head: HeadFC = () => {
  return <SEO {...{ title: 'Not Found' }} />;
};
