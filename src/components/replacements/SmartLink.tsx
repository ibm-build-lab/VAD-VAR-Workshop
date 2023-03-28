import { Link } from 'gatsby';
import React from 'react';

interface SmartLinkProps {
  children?: React.ReactNode;
  href?: string;
}

const SmartLink: React.FC<SmartLinkProps> = (props) => {
  const { children, href = '' } = props;
  const isInteral = !href.startsWith('//') && !href.startsWith('https');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const linkProps: any = isInteral
    ? { to: href }
    : { href: href, target: '_blank', rel: 'noreferrer' };
  return React.createElement(isInteral ? Link : 'a', linkProps, children);
};

export default SmartLink;
