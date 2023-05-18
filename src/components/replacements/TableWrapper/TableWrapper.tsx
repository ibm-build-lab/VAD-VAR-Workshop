import React from 'react';
import * as styles from './TableWrapper.module.scss';

const TableWrapper: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = (props) => {
  const { children } = props;
  return (
    <div className={styles.tableWrapper}>
      <table>{children}</table>
    </div>
  );
};

export default TableWrapper;
