import React from 'react';
import '../styles/global.scss';
import { Header, HeaderName, HeaderContainer, Content } from '@carbon/react';
import * as styles from '../styles/components/Layout.module.scss';
import SideBar from './SideBar';

const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <>
      <HeaderContainer
        render={({ isSideNavEnabled, onClickSideNavExpand }) => (
          <>
            <Header aria-label='IBM Platform Name' className={styles.header}>
              <HeaderName href='/' prefix='IBM'>
                VAD VAR Misson
              </HeaderName>
              <SideBar></SideBar>
            </Header>
            <Content className='cds--col-lg-13 cds--offset-lg-3'>{children}</Content>
          </>
***REMOVED***}
      />
    </>
  );
};

export default Layout;
