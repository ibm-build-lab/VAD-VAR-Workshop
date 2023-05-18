import ItemTile from '@components/ItemTile';
import useSiteMap from '@hooks/useSiteMap';
import React from 'react';
import * as styles from '@styles/pages/index.module.scss';
import PageHeader from '@components/PageHeader';
import { useTranslation } from 'react-i18next';
import ContentWrapper from '@components/ContentWrapper';

const LandingPage = () => {
  const siteMap = useSiteMap();
  const { t } = useTranslation();

  return (
    <>
      <PageHeader>{t('landingPageTitle')}</PageHeader>
      <ContentWrapper className={styles.content}>
        <div className={styles.tileContainer}>
          {siteMap.map((item, index) => {
            const { children = [] } = item;

            const lastUpdated = children.sort((a, b) => b.updated?.localeCompare(a.updated))[0];
            const timeNeeded = children.reduce((acc, curr) => acc + curr.timeToComplete, 0);

            return (
              <ItemTile
                lastUpdated={lastUpdated?.updated}
                timeNeeded={timeNeeded}
                key={index}
                {...item}
                className={styles.tile}
              />
    ***REMOVED***;
      ***REMOVED***)}
        </div>
      </ContentWrapper>
    </>
  );
};

export default LandingPage;
