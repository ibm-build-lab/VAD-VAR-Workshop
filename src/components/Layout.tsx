import '../styles/globals.scss';
import * as styles from '../styles/components/Layout.module.scss';
import React from 'react';
import SideBar from './SideBar';
import { Content, Header, HeaderName } from '@carbon/react';
import useSiteMetadata from '../hooks/useSiteMetaData';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const { title } = useSiteMetadata();

  return (
    <>
      <Header aria-label='IBM Platform Name' className={styles.header}>
        <HeaderName prefix='IBM'>{title}</HeaderName>
      </Header>
      <SideBar />
      <Content className={styles.content}>{children}</Content>
    </>
  );
};

export default Layout;
