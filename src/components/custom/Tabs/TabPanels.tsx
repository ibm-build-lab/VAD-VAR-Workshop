'use client';

import { TabPanels as CarbonTabPanels } from '@carbon/react';

type TabPanelsProps = React.ComponentProps<typeof CarbonTabPanels>;

export default function TabPanels(props: TabPanelsProps) {
  return <CarbonTabPanels {...props} />;
}
