import React from 'react';
import * as styles from './BlockQuote.module.scss';
import { HelpFilled, InformationFilled } from '@carbon/react/icons';
import cx from 'classnames';

interface BlockQuoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  alt?: boolean;
}

const BlockQuote: React.FC<BlockQuoteProps> = (props) => {
  const { children, alt } = props;

  return (
    <blockquote className={cx(styles.blockQuote, alt && styles.altBlock)}>
      {React.createElement(alt ? HelpFilled : InformationFilled, { size: 20 })}
      {children}
    </blockquote>
  );
};

export default BlockQuote;
