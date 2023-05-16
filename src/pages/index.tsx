import ItemTile from '@components/ItemTile';
import useSiteMap from '@hooks/useSiteMap';
import React from 'react';
import * as styles from '@styles/pages/index.module.scss';

const LandingPage = () => {
  const siteMap = useSiteMap();

  return (
    <div className={styles.container}>
      <h1>dsfsdf</h1>
      {siteMap.map((item, index) => {
        return <ItemTile key={index} {...item} />;
  ***REMOVED***)}
    </div>
  );
};

export default LandingPage;
