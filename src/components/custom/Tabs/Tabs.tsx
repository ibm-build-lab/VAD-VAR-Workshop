'use client';

import { Tabs as CarbonTabs, type TabsProps } from '@carbon/react';
import styles from './Tabs.module.scss';

export default function Tabs(props: TabsProps) {
  return (
    <div className={styles.tabs}>
      <CarbonTabs {...props} />
    </div>
  );
}
