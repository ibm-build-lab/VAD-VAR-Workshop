'use client';

import { AccordionItem as CarbonAccordionItem } from '@carbon/react';
import styles from './AccordionItem.module.scss';

type AccordionItemProps = React.ComponentProps<typeof CarbonAccordionItem>;

export default function AccordionItem(props: AccordionItemProps) {
  const { children, ...rest } = props;

  return (
    <CarbonAccordionItem {...rest} className={styles.test}>
      <div className={styles.container}>{children}</div>
    </CarbonAccordionItem>
  );
}
