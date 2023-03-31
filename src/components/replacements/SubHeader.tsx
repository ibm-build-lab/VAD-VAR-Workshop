import { Tag } from '@carbon/react';
import React from 'react';
import { Calendar, Time } from '@carbon/react/icons';
import * as styles from '../../styles/components/replacements/SubHeader.module.scss';

interface SubHeaderProps {
  timeToComplete?: number;
  updated?: string;
}

const ICON_SIZE = 'sm';

const SubHeader = (props: SubHeaderProps) => {
  const { timeToComplete, updated } = props;

  return (
    <div className={styles.subHeader}>
      {updated && (
        <Tag size={ICON_SIZE} type='gray' renderIcon={Calendar}>
          Last updated {new Date(updated).toLocaleDateString()}
        </Tag>
      )}
      {timeToComplete && (
        <Tag size={ICON_SIZE} type='blue' renderIcon={Time}>
          {timeToComplete} min
        </Tag>
      )}
    </div>
  );
};

export default SubHeader;
