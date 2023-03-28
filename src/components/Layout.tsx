import React from 'react';
import { Header, HeaderName, Content } from '@carbon/react';
import * as styles from '../styles/components/Layout.module.scss';
import SideBar from './SideBar';
import { cleanPathString } from '../helpers/helpers';

interface LayoutProps {
  children: React.ReactNode;
  location: {
    pathname: string;
  };
}

const Layout = (props: LayoutProps) => {
  const {
    children,
    location: { pathname }
  } = props;

  return (
    <>
      <Header aria-label='IBM Platform Name' className={styles.header}>
        <HeaderName href='/' prefix='IBM'>
          VAD VAR Mission
        </HeaderName>
      </Header>

      <SideBar currentPath={cleanPathString(pathname)} />
      <Content className={styles.content}>{children}</Content>
    </>
  );
};

export default Layout;
