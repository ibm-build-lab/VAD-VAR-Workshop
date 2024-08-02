'use client';

import {
  ListItem as CarbonListItem,
  OrderedList as CarbonOrderedList,
  UnorderedList as CarbonUnorderedList
} from '@carbon/react';
import type { ComponentProps } from 'react';
import styles from './List.module.scss';

/**
 *
 * Maps to `li` element
 */
export default function ListItem(props: ComponentProps<'li'>) {
  const { children, ...rest } = props;
  return <CarbonListItem {...rest}>{children}</CarbonListItem>;
}

/**
 *
 * Maps to `ol` element
 *
 * `native` options must be used to ensure `start` property is passed along properly
 */
export function OrderedList(props: ComponentProps<'ol'>) {
  const { children, start = 1 } = props;
  return (
    <CarbonOrderedList
      native
      isExpressive
      className={styles.orderedList}
      start={start}>
      {children}
    </CarbonOrderedList>
  );
}

/**
 *
 * Maps to `ul` element
 */
export function UnorderedList(props: ComponentProps<'ul'>) {
  const { children } = props;
  return (
    <CarbonUnorderedList isExpressive className={styles.unOrderedList}>
      {children}
    </CarbonUnorderedList>
  );
}
