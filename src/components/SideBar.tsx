import { SideNav, SideNavMenuItem, SideNavItems } from '@carbon/react';
import React from 'react';
import * as styles from '../styles/components/SideBar.module.scss';

const SideBar = () => {
  return (
    <SideNav
      isFixedNav
      expanded
      aria-label='Side navigation'
      className={styles.sidebar}
      isChildOfHeader={true}>
      <SideNavItems>
        <SideNavMenuItem href='/'>Home</SideNavMenuItem>
      </SideNavItems>
    </SideNav>
  );
};

export default SideBar;
