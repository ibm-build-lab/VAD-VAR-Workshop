import React from 'react';
import * as styles from '../../styles/components/replacements/BlockQuote.module.scss';
import { InformationSquare } from '@carbon/react/icons';

const BlockQuote: React.FC<React.BlockquoteHTMLAttributes<HTMLQuoteElement>> = (props) => {
  const { children } = props;

  return (
    <blockquote className={styles.blockQuote}>
      <InformationSquare size={24} />
      {children}
    </blockquote>
  );
};

export default BlockQuote;
