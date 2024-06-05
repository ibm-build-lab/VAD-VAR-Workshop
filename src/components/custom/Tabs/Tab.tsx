'use client';

import { Tab as CarbonTab } from '@carbon/react';
import { forwardRef } from 'react';

type TabProps = React.ComponentProps<typeof CarbonTab>;

export default forwardRef<HTMLElement, TabProps>(function Tab(
  props: TabProps,
  ref
) {
  return <CarbonTab {...props} ref={ref} />;
});
