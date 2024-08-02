'use client';

import { Accordion as CarbonAccordion } from '@carbon/react';

type AccordionProps = React.ComponentProps<typeof CarbonAccordion>;

export default function Accordion(props: AccordionProps) {
  return <CarbonAccordion {...props} />;
}
