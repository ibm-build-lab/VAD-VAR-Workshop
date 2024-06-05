'use client';

import { TabPanel as CarbonTabPanel, Layer } from '@carbon/react';
import styles from './TabPanel.module.scss';

type TabPanelsProp = React.ComponentProps<typeof CarbonTabPanel>;

/**
 * Houses actual content contained within each tab
 */
export default function TabPanel(props: TabPanelsProp) {
  const { children, ...rest } = props;
  return (
    <CarbonTabPanel {...rest} className={styles.tabPanel}>
      <Layer className={styles.container}>{children}</Layer>
    </CarbonTabPanel>
  );
}
