import React, { BlockquoteHTMLAttributes, createElement } from 'react';
import {
  HelpFilled,
  InformationFilled,
  WarningAltFilled,
  WarningSquareFilled
} from '@carbon/react/icons';
import cx from 'classnames';
import * as styles from './BlockQuote.module.scss';

type AllowedTypes = 'standard' | 'success' | 'warning' | 'danger';

export interface BlockQuoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  alt?: boolean;
  type?: AllowedTypes;
}

const iconMap = {
  standard: InformationFilled,
  success: HelpFilled,
  warning: WarningSquareFilled,
  danger: WarningAltFilled
};

const BlockQuote: React.FC<BlockQuoteProps> = (props) => {
  const { children, type = 'standard' } = props;

  return (
    <blockquote className={cx(styles.blockQuote, styles[type])}>
      {createElement(iconMap[type], { size: 20 })}
      <div className={styles.blockQuoteContent}>{children}</div>
    </blockquote>
  );
};

export default BlockQuote;
