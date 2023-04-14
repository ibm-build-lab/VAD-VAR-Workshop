import * as styles from '../styles/components/SideBar.module.scss';
import { Link } from 'gatsby';
import React from 'react';
import { cleanPathString } from '../helpers/helpers';
import cx from 'classnames';
import { useLocation } from '@reach/router';
import { usePrefix } from '@carbon/react';
import { SideNav, SideNavDivider, SideNavItems, SideNavLinkText, SideNavMenu } from '@carbon/react';
import buildSiteMap, { MenuItem } from '../helpers/buildSiteMap';

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
      {navItems.map((item, index) => {
        const { children, name, slug } = item;
        const cleanSlug = cleanPathString(slug);
        const isActive = cleanSlug === currentPath;

        return children.length > 0 ? (
          <SideNavMenu
            key={index}
            title={name}
            defaultExpanded={cleanSlug === splitCurrPath.slice(0, depth + 1).join('/')}
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
***REMOVED*** : (
          <CustomSideNavItem key={index} href={slug} isActive={isActive} depth={depth}>
            {name || ''}
          </CustomSideNavItem>
***REMOVED***;
  ***REMOVED***)}
    </>
  );
};

const SideBar = () => {
  const siteMap = buildSiteMap();
  const { pathname } = useLocation();
  const cleanPathName = cleanPathString(pathname);

  return (
    <SideNav
      isFixedNav
      expanded
      aria-label='Side navigation'
      className={styles.sidebar}
      isChildOfHeader={true}>
      <SideNavItems>
        <CustomSideNavItem href='/'>Home</CustomSideNavItem>
        <SideNavDivider />
        <NavBar navItems={siteMap} currentPath={cleanPathName} />
      </SideNavItems>
    </SideNav>
  );
};

export default SideBar;
