'use client';

import NextLink from 'next/link';
import { createElement } from 'react';
import { isURLRelative } from '#/lib/helpers';
import styles from './Link.module.scss';

type SmartLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function SmartLink(props: SmartLinkProps) {
  const { href = '', children } = props;

  const isRelativeLink = isURLRelative(href);
  const isHashRoute = href.startsWith('#');

  const El: React.ElementType = isRelativeLink ? NextLink : 'a';
  return createElement(
    El,
    { className: styles.link, href, replace: isHashRoute ? true : undefined },
    children
  );
}
