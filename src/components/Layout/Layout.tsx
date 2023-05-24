import { Content, Header, HeaderGlobalBar, HeaderName } from '@carbon/react';
import React from 'react';
import { useSiteMetadata } from '@hooks/index';
import Footer from '@components/Footer';
import * as styles from './Layout.module.scss';
import SideBar from '../SideBar';
import LanguageSelector from '../LanguageSelector';
import '@styles/globals.scss';

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
