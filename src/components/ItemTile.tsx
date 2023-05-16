import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Tile } from '@carbon/react';
import * as styles from '@styles/components/ItemTile.module.scss';

const ItemTile = (props: any) => {
  const { slug, name } = props;

  return (
    <Tile className={styles.tileContainer}>
      <h3>{name}</h3>
      <GatsbyLink to={slug}>Here</GatsbyLink>
    </Tile>
  );
};

export default ItemTile;
