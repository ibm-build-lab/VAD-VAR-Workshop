'use client';

import { ClickableTile } from '@carbon/react';
import { ArrowRight } from '@carbon/react/icons';
import { useRouter } from 'next/navigation';
import { useFormatter, useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import CustomStack from '../../ui/Stack';
import { ReadingTimeTag } from '../../ui/Tags';
import styles from './NavTile.module.scss';

interface ClientNavTileProps {
  title: string;
  updated?: string;
  timeToComplete?: number;
  children?: ReactNode;
  to: string;
}

export default function ClientNavTile(props: ClientNavTileProps) {
  const { title, updated, timeToComplete = 0, to, children } = props;

  const formatter = useFormatter();
  const router = useRouter();
  const t = useTranslations('components.shared');

  return (
    <ClickableTile
      title={title}
      onClick={(e) => {
        e.preventDefault();
        router.push(to);
  ***REMOVED***}
      href={to}
      onMouseEnter={() => router.prefetch(to)}>
      <CustomStack
        className={styles.tileStack}
        orientation='vertical'
        spacing={5}>
        <CustomStack
          className={styles.topStack}
          orientation='vertical'
          spacing={1}>
          <p className={styles.title}>{title}</p>
          {updated && (
            <p className={styles.updated}>
              {t('lastUpdated', {
                date: formatter.relativeTime(new Date(updated))
          ***REMOVED***)}
            </p>
  ***REMOVED***}
        </CustomStack>

        {children && <div className={styles.excerpt}>{children}</div>}

        <CustomStack
          className={styles.bottomStack}
          orientation='horizontal'
          align='center'
          justify={timeToComplete ? 'space-between' : 'flex-end'}>
          {timeToComplete > 0 && (
            <ReadingTimeTag timeToComplete={timeToComplete} />
  ***REMOVED***}
          <ArrowRight size={16} />
        </CustomStack>
      </CustomStack>
    </ClickableTile>
  );
}
