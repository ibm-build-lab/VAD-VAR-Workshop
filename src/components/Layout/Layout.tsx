import { Content, Header, HeaderGlobalBar, HeaderName } from '@carbon/react';
import React from 'react';
import * as styles from './Layout.module.scss';
import '@styles/globals.scss';
import SideBar from '../SideBar';
import { useSiteMetadata } from '@hooks/index';
import LanguageSelector from '../LanguageSelector';
import Footer from '@components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const { title } = useSiteMetadata();

  return (
    <>
      <Header aria-label={`IBM ${title}`} className={styles.header}>
        <HeaderName prefix='IBM' href='/'>
          {title}
        </HeaderName>
        <HeaderGlobalBar aria-label={`IBM ${title}`} className={styles.headerNav}>
          <LanguageSelector />
        </HeaderGlobalBar>
      </Header>
      <SideBar />
      <div className={styles.wrapper}>
        <Content className={styles.content}>{children}</Content>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
