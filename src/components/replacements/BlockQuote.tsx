import React from 'react';
import * as styles from '../../styles/components/replacements/BlockQuote.module.scss';
import { InformationSquare } from '@carbon/react/icons';

interface BlockQuoteProps {
  children?: React.ReactNode;
}

const BlockQuote: React.FC<BlockQuoteProps> = (props) => {
  const { children } = props;

  return (
    <blockquote className={styles.blockQuote}>
      <InformationSquare size={24} />
      {children}
    </blockquote>
  );
};

export default BlockQuote;
