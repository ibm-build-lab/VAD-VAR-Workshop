import React, { createElement } from 'react';
import cx from 'classnames';
import * as styles from './ContentWrapper.module.scss';

interface ContentWrapperProps {
  children: React.ReactNode;
  className?: string;
  as?: string;
}

const ContentWrapper = (props: ContentWrapperProps) => {
  const { children, className, as } = props;

  const wrapperClass = cx(styles.contentWrapper, className && className);

  return createElement(as || 'div', { className: wrapperClass }, children);
};

export default ContentWrapper;
