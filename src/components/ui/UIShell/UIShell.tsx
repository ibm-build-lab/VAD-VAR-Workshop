'use client';

import {
  Header,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderName,
  SideNav,
  SideNavDivider,
  SideNavItems
} from '@carbon/react';
import { Home } from '@carbon/react/icons';
import { useLocale, useTranslations } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { useState, type ReactNode } from 'react';
import type { SlugTree } from '#/lib/velite/generate-tree';
import siteConfig from '#site-config';
import CustomSideNavItem from './CustomSideNavItem';
import Footer from './Footer';
import LangDropdown from './LangDropdown';
import ResponsiveContent from './ResponsiveContent';
import SearchBar from './SearchBar';
import SideNavTree from './SideNavTree';
import ToggleThemeAction from './ToggleThemeAction';
import styles from './UIShell.module.scss';

const {
  name: { prefix, title }
} = siteConfig;

interface UIShellProps {
  children: ReactNode;
  sideBarTree: SlugTree;
}

const THEME_MAP = { light: 'cds--white', dark: 'cds--g100' };

export default function UIShell(props: UIShellProps) {
  const { children, sideBarTree } = props;
  const [showSideNav, setShowSideNav] = useState(true);
  const currentLocale = useLocale();
  const t = useTranslations('UIShell');

  const toggleSideBar = () => setShowSideNav((o) => !o);

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute='class'
      value={THEME_MAP}
      themes={Object.keys(THEME_MAP)}>
      <Header className={styles.header} aria-label='header'>
        <HeaderMenuButton
          className={styles.headerButton}
          aria-label={t(`Header.menuButton.${showSideNav ? 'close' : 'open'}`)}
          isCollapsible
          isActive={showSideNav}
          onClick={toggleSideBar}
          aria-expanded={showSideNav}
        />
        <HeaderName prefix={prefix}>{title}</HeaderName>
        <HeaderGlobalBar>
          <SearchBar />
          <ToggleThemeAction />
          <LangDropdown sideBarTree={sideBarTree} />
        </HeaderGlobalBar>

        <SideNav
          isPersistent
          isChildOfHeader
          expanded={showSideNav}
          onOverlayClick={toggleSideBar}
          onSideNavBlur={toggleSideBar}
          className={styles.sideBar}
          aria-label={t('SideNav.label')}>
          <SideNavItems>
            <CustomSideNavItem href={`/${currentLocale}`} renderIcon={Home}>
              Home
            </CustomSideNavItem>
            <SideNavDivider />
            <SideNavTree
              navItems={sideBarTree.children![currentLocale].children || {}}
            />
          </SideNavItems>
        </SideNav>
      </Header>

      <ResponsiveContent className={styles.content} as='div'>
        <main>{children}</main>
        <Footer />
      </ResponsiveContent>
    </ThemeProvider>
  );
}
