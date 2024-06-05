'use client';

import { TabList as CarbonTabList, type TabListProps } from '@carbon/react';

export default function TabList(props: Omit<TabListProps, 'contained'>) {
  return <CarbonTabList {...props} contained />;
}
