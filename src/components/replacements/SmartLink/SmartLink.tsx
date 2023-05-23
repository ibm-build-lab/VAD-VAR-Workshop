import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Launch } from '@carbon/react/icons';
import { Link as CarbonLink } from '@carbon/react';
import { useCurrentLanguage } from '@hooks/index';

const SmartLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { children, href = '' } = props;
  const isExternal = href.startsWith('//') || href.startsWith('http') || href.startsWith('mailto:');
  const currLang = useCurrentLanguage();

  if (isExternal)
    return (
      <CarbonLink href={href} target='_blank' rel='noreferrer'>
        {children}
        {<Launch />}
      </CarbonLink>
    );

  const isHash = href.startsWith('#');

  let to = href;
  if (!isHash && currLang) {
    to = `/${currLang}${href}`;
  }

  return (
    <GatsbyLink to={to} replace={isHash}>
      {children}
    </GatsbyLink>
  );
};

export default SmartLink;
