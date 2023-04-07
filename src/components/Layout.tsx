import { Content, Header, HeaderName } from '@carbon/react';
import React from 'react';
import useSiteMetadata from '../helpers/useSiteMetaData';
import * as styles from '../styles/components/Layout.module.scss';
import '../styles/globals.scss';
import TreeSideBar from './TreeSideBar';

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
      <TreeSideBar />
      <Content className={styles.content}>{children}</Content>
    </>
  );
};

export default Layout;
