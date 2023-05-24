import React, { BlockquoteHTMLAttributes, createElement } from 'react';
import { HelpFilled, InformationFilled } from '@carbon/react/icons';
import cx from 'classnames';
import * as styles from './BlockQuote.module.scss';

interface BlockQuoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  alt?: boolean;
}

const BlockQuote: React.FC<BlockQuoteProps> = (props) => {
  const { children, alt } = props;

  return (
    <blockquote className={cx(styles.blockQuote, alt && styles.altBlock)}>
      {createElement(alt ? HelpFilled : InformationFilled, { size: 20 })}
      {children}
    </blockquote>
  );
};

export default BlockQuote;
