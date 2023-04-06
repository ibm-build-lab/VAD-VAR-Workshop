import { Link } from '@reach/router';
import React from 'react';
import { Launch } from '@carbon/react/icons';
import { Link as CarbonLink } from '@carbon/react';

interface SmartLinkProps {
  children?: React.ReactNode;
  href?: string;
}

const SmartLink: React.FC<SmartLinkProps> = (props) => {
  const { children, href = '' } = props;

  if (href.startsWith('#')) return <a href={href}>{children}</a>;

  const isInternal =
    !href.startsWith('//') && !href.startsWith('http') && !href.startsWith('mailto:');

  if (isInternal) return <Link to={href}>{children}</Link>;

  return (
    <CarbonLink href={href} target='_blank' rel='noreferrer'>
      {children}
      {<Launch />}
    </CarbonLink>
  );
};

export default SmartLink;
