import { Link } from 'gatsby';
import React from 'react';
import cx from 'classnames';
import { useLocation } from '@reach/router';
import {
  SideNav,
  SideNavDivider,
  SideNavItems,
  SideNavLinkText,
  SideNavMenu,
  usePrefix
} from '@carbon/react';
import { cleanPathString } from '@helpers/helpers.mjs';
import { MenuItem } from '@helpers/buildSiteMap';
import { useSiteMap } from '@hooks/index';
import * as styles from './SideBar.module.scss';

interface SmartLinkProps {
  href: string;
  children: NonNullable<React.ReactNode>;
  isActive?: boolean;
  style?: object;
  depth?: number;
}

interface NavBarProps {
  navItems: MenuItem[];
  currentPath: string;
  depth?: number;
  index?: string;
}

interface SideBarProps {
  isOpen?: boolean;
  toggleOpen?: () => void;
}

// custom link implementation to stop remounts
const CustomSideNavItem = (props: SmartLinkProps) => {
  const prefix = usePrefix();
  const { href, children, isActive = false, depth = 0 } = props;

  const linkClassName = cx(
    `${prefix}--side-nav__link`,
    styles[`col${depth}`],
    isActive && `${prefix}--side-nav__link--current`
  );

  return (
    <li className={`${prefix}--side-nav__menu-item`}>
      <Link to={href} className={linkClassName}>
        <SideNavLinkText>{children}</SideNavLinkText>
      </Link>
    </li>
  );
};

// build side nav recursively
const NavBar = (props: NavBarProps) => {
  const { navItems, currentPath, depth = 0 } = props;
  const splitCurrPath = cleanPathString(currentPath).split('/');

  return (
    <>
      {navItems.map((item) => {
        const { children, name, slug } = item;
        const cleanSlug = cleanPathString(slug);
        const isActive = cleanSlug === currentPath;

        return children.length > 0 ? (
          <SideNavMenu
            key={`${name}-col`}
            title={name}
            defaultExpanded={cleanSlug === splitCurrPath.slice(0, depth + 2).join('/')}
            className={styles[`col${depth}`]}>
            <CustomSideNavItem href={slug} isActive={isActive} depth={depth + 1}>
              {name}
            </CustomSideNavItem>
            <NavBar
              navItems={children.sort((a, b) => a.name.localeCompare(b.name))}
              currentPath={currentPath}
              depth={depth + 1}
            />
          </SideNavMenu>
        ) : (
          <CustomSideNavItem key={`${name}-item`} href={slug} isActive={isActive} depth={depth}>
            {name || ''}
          </CustomSideNavItem>
        );
      })}
    </>
  );
};

const SideBar = (props: SideBarProps) => {
  const { isOpen, toggleOpen } = props;
  const siteMap = useSiteMap();
  const { pathname } = useLocation();
  const cleanPathName = cleanPathString(pathname);

  const sidebarClass = cx(styles.sidebar);

  return (
    <SideNav
      expanded={isOpen}
      onOverlayClick={toggleOpen}
      aria-label='Side navigation'
      className={sidebarClass}
      isPersistent
      isChildOfHeader>
      <SideNavItems>
        <CustomSideNavItem href={`/`}>Home</CustomSideNavItem>
        <SideNavDivider />
        <NavBar navItems={siteMap} currentPath={cleanPathName} />
      </SideNavItems>
    </SideNav>
  );
};

export default SideBar;
