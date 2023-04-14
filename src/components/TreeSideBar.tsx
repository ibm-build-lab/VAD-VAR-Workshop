import {
  SideNav,
  SideNavDivider,
  SideNavItems,
  SideNavLinkText,
  TreeNode,
  TreeView,
  usePrefix
} from '@carbon/react';
import { useLocation } from '@reach/router';
import cx from 'classnames';
import { Link, navigate } from 'gatsby';
import React, { useMemo } from 'react';
import buildSiteMap, { MenuItem } from '../helpers/buildSiteMap';
import { cleanPathString } from '../helpers/helpers';
import * as styles from '../styles/components/SideBar.module.scss';

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
  active?: string;
  depth?: number;
  index?: string;
}

const LinkItem = ({ slug, name }: { slug: string; name: string }) => <Link to={slug}>{name}</Link>;

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

const arrTreeNavBar = (props: NavBarProps): React.ReactNode[] => {
  const { navItems, currentPath } = props;

  return navItems.map((item) => {
    const { children, name, slug } = item;

    return children.length > 0 ? (
      <TreeNode
        key={`${name}-start`}
        id={`${name}-start`}
        value={name}
        onSelect={() => navigate(slug)}
        label={<LinkItem slug={slug} name={name} />}>
        {arrTreeNavBar({
          navItems: children,
          currentPath: currentPath
    ***REMOVED***)}
      </TreeNode>
    ) : (
      <TreeNode key={name} id={name} value={name} label={name} onSelect={() => navigate(slug)} />
    );
  });
};

const TreeSideBar = () => {
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
        <TreeView className={styles.tree} label={'TreeView Side Navigation'} hideLabel={true}>
          {useMemo(
            () =>
              arrTreeNavBar({
                navItems: siteMap,
                currentPath: cleanPathName
          ***REMOVED***),
            []
  ***REMOVED***}
        </TreeView>
      </SideNavItems>
    </SideNav>
  );
};
export default TreeSideBar;
