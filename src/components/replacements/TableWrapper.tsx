import React from 'react';
import * as styles from '../../styles/components/replacements/TableWrapper.module.scss';

interface TableWrapperProps {
  children?: React.ReactNode;
}

const TableWrapper: React.FC<TableWrapperProps> = (props) => {
  const { children } = props;
  return (
    <div className={styles.tableWrapper}>
      <table>{children}</table>
    </div>
  );
};

export default TableWrapper;
