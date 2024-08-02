'use client';

import { ClickableTile, Stack } from '@carbon/react';
import type { ClickableTileProps } from '@carbon/react';
import { useRouter } from 'next/navigation';
import styles from './PageNavFooter.module.scss';

interface PageNavFooterProps {
  next?: string;
  previous?: string;
}

function NavTile(
  props: ClickableTileProps & { name: string; direction: 'previous' | 'next' }
) {
  const { name, direction, ...rest } = props;

  return (
    <ClickableTile {...rest} className={styles.navTile}>
      <Stack gap={1}>
        <div className={styles.direction}>{direction} Page</div>
        <div className={styles.name}>{name}</div>
      </Stack>
    </ClickableTile>
  );
}

export default function PageNavFooter(props: PageNavFooterProps) {
  const { next, previous } = props;
  const router = useRouter();

  const navTo = (place: string = '/') => {
    return () => router.push(place);
  };

  return (
    <nav className={styles.pageNav}>
      <NavTile
        onClick={navTo(previous)}
        direction='previous'
        name='Typography'
      />
      <NavTile
        onClick={navTo(next)}
        disabled
        direction='next'
        name='Custom Components'
      />
    </nav>
  );
}
