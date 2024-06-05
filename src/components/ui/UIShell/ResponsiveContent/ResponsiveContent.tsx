import { usePrefix } from '@carbon/react';
import cx from 'classnames';
import { createElement } from 'react';
import type { ComponentType, HTMLAttributes, ReactHTML } from 'react';
import styles from './ResponsiveContent.module.scss';

type GenericHTMLElement = HTMLAttributes<HTMLElement>;
type HTMLTag = keyof ReactHTML;
interface ResponsiveContentProps extends GenericHTMLElement {
  /**
   * element that will be rendered as wrapper around children
   */
  as?: ComponentType<GenericHTMLElement> | HTMLTag;
}

export default function ResponsiveContent(props: ResponsiveContentProps) {
  const { as = 'main', children, className, ...rest } = props;
  const prefix = usePrefix();
  const resContentClass = cx(
    styles.content,
    `${prefix}--content`,
    className && className
  );

  return createElement(as, { ...rest, className: resContentClass }, children);
}
