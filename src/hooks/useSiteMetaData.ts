import { graphql, useStaticQuery } from 'gatsby';

// returns static query of site metadata
const useSiteMetadata = () => {
  const {
    site: {
      siteMetadata: { title, siteUrl, description }
***REMOVED***
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  `);

  const { origin } = (typeof window !== 'undefined' &&
    typeof window.location !== 'undefined' &&
    window.location) || { origin: siteUrl };

  return { origin, title, description };
};

export default useSiteMetadata;
