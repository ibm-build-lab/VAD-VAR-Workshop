import { Content, Header, HeaderGlobalBar, HeaderMenuButton, HeaderName } from '@carbon/react';
import React, { useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  return (
    <>
      <Header aria-label={`IBM ${title}`} className={styles.header}>
        <HeaderMenuButton
          className={styles.headerButton}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          isCollapsible
          onClick={toggleMenu}
          isActive={menuOpen}
          aria-expanded={menuOpen}
        />
        <HeaderName prefix='IBM' href='/'>
          {title}
        </HeaderName>
        <HeaderGlobalBar aria-label={`IBM ${title}`} className={styles.headerNav}>
          <LanguageSelector />
        </HeaderGlobalBar>
        <SideBar isOpen={menuOpen} toggleOpen={toggleMenu} />
      </Header>

      <div className={styles.wrapper}>
        <Content className={styles.content}>{children}</Content>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
