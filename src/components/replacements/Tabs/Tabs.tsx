import React, { useState } from 'react';

import * as styles from './Tabs.module.scss';

export interface TabsProps {
  headers: Array<string>;
  content: Array<string>;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { headers, content } = props;

  const [active, setActive] = useState(0);

  console.log(headers, content);
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        {headers.map((header, i) => (
          <div
            key={i}
            className={active === i ? styles.headerActive : styles.header}
            onClick={() => setActive(i)}>
            {header}
          </div>
***REMOVED***)}
      </div>
      {content[active]}
    </div>
  );
};

export default Tabs;
