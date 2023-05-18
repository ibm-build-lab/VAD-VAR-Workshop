import { Tag } from '@carbon/react';
import ContentWrapper from '@components/ContentWrapper';
import React, { LegacyRef, Suspense } from 'react';
import * as styles from './PageHeader.module.scss';
import { Calendar, Time } from '@carbon/react/icons';

interface PageHeaderProps {
  children: React.ReactNode;
  timeToComplete?: number;
  updated?: string;
}

// eslint-disable-next-line react/display-name
const PageHeader = React.forwardRef<Element, PageHeaderProps>(
  ({ children, timeToComplete, updated }, ref) => (
    <div className={styles.pageHeader} ref={ref as LegacyRef<HTMLDivElement>}>
      <ContentWrapper className={styles.contentWrapper}>
        <div className={styles.metadata}>
          {timeToComplete && (
            <Tag size='md' type='high-contrast' renderIcon={Time} className={styles.timeTag}>
              {timeToComplete} min
            </Tag>
  ***REMOVED***}
          {updated && (
            <Tag size='md' type='high-contrast' renderIcon={Calendar} className={styles.timeTag}>
              <Suspense>Last updated {new Date(updated).toLocaleDateString()}</Suspense>
            </Tag>
  ***REMOVED***}
        </div>
        <h1 id='page-header'>{children}</h1>
      </ContentWrapper>
    </div>
  )
);

export default PageHeader;
