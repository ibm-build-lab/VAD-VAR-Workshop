import React from 'react';
import * as styles from './BlockQuote.module.scss';
import { InformationSquare, RequestQuote } from '@carbon/react/icons';
import cx from 'classnames';

interface BlockQuoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  alt?: boolean;
}

const BlockQuote: React.FC<BlockQuoteProps> = (props) => {
  const { children, alt } = props;

  return (
    <blockquote className={cx(styles.blockQuote, alt && styles.altBlock)}>
      {React.createElement(alt ? RequestQuote : InformationSquare, { size: 24 })}
      {children}
    </blockquote>
  );
};

export default BlockQuote;
