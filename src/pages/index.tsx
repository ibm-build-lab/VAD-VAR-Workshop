import React from 'react';
import { useTranslation } from 'react-i18next';
import { marked } from 'marked';
import ItemTile from '@components/ItemTile';
import useSiteMap from '@hooks/useSiteMap';
import * as styles from '@styles/pages/index.module.scss';
import PageHeader from '@components/PageHeader';
import ContentWrapper from '@components/ContentWrapper';
import { QuizAlert } from '@components/replacements';
import useSiteMetadata from '@hooks/useSiteMetaData';
import SEO from '@components/SEO';
import { MenuItem } from '@helpers/buildSiteMap';

/**
 * Merges tree-like structure of MenuItems into flattened array
 * @param {MenuItem[]} nodeArray
 * @returns {MenuItem[]}
 */
const flattenTree = (nodeArr: Array<MenuItem>) => {
  let arr = [...nodeArr];

  for (let i = 0; i < arr.length; i++) {
    if ('children' in arr[i]) {
      arr = arr.concat(arr[i].children);
***REMOVED***
  }

  return arr;
};

const calcReadingTime = (nodeArr: Array<MenuItem>) => {
  return flattenTree(nodeArr).reduce((acc, curr) => acc + curr.timeToComplete, 0);
};

const calcUpdated = (nodeArr: Array<MenuItem>) => {
  return flattenTree(nodeArr).sort((a, b) => b.updated?.localeCompare(a.updated))[0];
};

const LandingPage = () => {
  const siteMap = useSiteMap();
  const { t } = useTranslation();

  return (
    <>
      <PageHeader>{t('landingPageTitle')}</PageHeader>
      <ContentWrapper className={styles.content}>
        <div
          className={styles.contentText}
          dangerouslySetInnerHTML={{
            __html: marked.parse(t('landingPageContent'), { headerIds: false, mangle: false })
      ***REMOVED***}
        />
        <QuizAlert text={t('landingPageQuizAlert') as string} />
        <h2>Products</h2>
        <div className={styles.tileContainer}>
          {siteMap
            .filter(({ children = [] }) => children.length > 0)
            .map((item, index) => {
              const { children } = item;
              const lastUpdated = calcUpdated(children);
              const timeNeeded = calcReadingTime(children);

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

// SEO
export const Head = () => {
  const { title } = useSiteMetadata();
  return <SEO {...{ pathname: '/', title }} />;
};

export default LandingPage;
