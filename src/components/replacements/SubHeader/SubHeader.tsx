import { Tag } from '@carbon/react';
import React, { Suspense } from 'react';
import { Calendar, Time } from '@carbon/react/icons';
import * as styles from './SubHeader.module.scss';

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
          <Suspense fallback={null}>Last updated {new Date(updated).toLocaleDateString()}</Suspense>
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
