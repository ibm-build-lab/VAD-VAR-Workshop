import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Launch } from '@carbon/react/icons';
import { Link as CarbonLink } from '@carbon/react';

interface SmartLinkProps {
  children?: React.ReactNode;
  href?: string;
}

const SmartLink: React.FC<SmartLinkProps> = (props) => {
  const { children, href = '' } = props;
  const isInternal = !href.startsWith('//') && !href.startsWith('http');

  if (isInternal) return <GatsbyLink to={href}>{children}</GatsbyLink>;

  return (
    <CarbonLink href={href} target='_blank' rel='noreferrer'>
      {children}
      {<Launch />}
    </CarbonLink>
  );
};

export default SmartLink;
