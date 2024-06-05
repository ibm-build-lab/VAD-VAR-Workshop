'use client';

import {
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  StructuredListRow,
  StructuredListWrapper
} from '@carbon/react';
import styles from './Table.module.scss';

type TableProps = React.ComponentProps<'table'>;
type TableSectionProps = React.ComponentProps<'thead' | 'tbody'>;
type TableDataProps = React.ComponentProps<'td'>;
type TableRowProps = React.ComponentProps<'tr'>;

/**
 *
 * Maps to `table` element
 */
export default function Table(props: TableProps) {
  const { children } = props;

  return (
    <div className={styles.tableWrapper}>
      <StructuredListWrapper className={styles.table} isCondensed>
        {children}
      </StructuredListWrapper>
    </div>
  );
}

/**
 *
 * Maps to `thead` element
 */
export function TableHead(props: TableSectionProps) {
  const { children } = props;

  return (
    <StructuredListHead className={styles.tableHeader}>
      {children as any}
    </StructuredListHead>
  );
}

/**
 *
 * Maps to `tbody` element
 */
export function TableBody(props: TableSectionProps) {
  const { children } = props;

  return <StructuredListBody>{children}</StructuredListBody>;
}

/**
 *
 * Maps to `tr` element
 */
export function TableRow(props: TableRowProps) {
  const { children } = props;

  return <StructuredListRow>{children}</StructuredListRow>;
}

/**
 *
 * Maps to `td` element
 */
export function TableHeadData(props: TableDataProps) {
  const { children } = props;
  return <StructuredListCell head>{children}</StructuredListCell>;
}

/**
 *
 * Maps to `td` element
 */
export function TableData(props: TableDataProps) {
  const { children } = props;

  return <StructuredListCell>{children}</StructuredListCell>;
}
