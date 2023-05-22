import React from 'react';
import { navigate } from 'gatsby';
import { ClickableTile, Tag } from '@carbon/react';
import cx from 'classnames';
import { ArrowRight, Time } from '@carbon/react/icons';
import { useTranslation } from 'react-i18next';
import * as styles from './ItemTile.module.scss';

interface ItemTileProps {
  slug: string;
  name: string;
  className?: string;
  timeNeeded: number;
  lastUpdated?: string;
}

const convertMinsToHrsMins = (mins: number) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const hs = h === 0 ? '' : `${h}hr`;
  const ms = m === 0 ? '' : String(m).padStart(2, '0') + 'min';
  return `${hs} ${ms}`;
};

const ItemTile = (props: ItemTileProps) => {
  const { slug, name, className, timeNeeded, lastUpdated } = props;
  const { t } = useTranslation();

  const tileClass = cx(styles.tileContainer, className && className);
  const tileTitle = t('landPageTileTitle', { name });

  return (
    <ClickableTile className={tileClass} onClick={() => navigate(slug)} title={tileTitle}>
      <div>
        <h3>{name}</h3>
        {lastUpdated && (
          <small>
            {t('landPageTileUpdated', {
              date: new Date(lastUpdated).toLocaleDateString('en-US', { timeZone: 'EST' })
            })}
          </small>
        )}
      </div>
      <div className={styles.bottomStack}>
        {timeNeeded !== 0 && (
          <Tag size='md' type='blue' renderIcon={Time}>
            {convertMinsToHrsMins(timeNeeded)}
          </Tag>
        )}
        <ArrowRight size={16} />
      </div>
    </ClickableTile>
  );
};

export default ItemTile;
