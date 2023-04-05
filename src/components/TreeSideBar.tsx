import * as styles from '../styles/components/SideBar.module.scss';
import { Link } from 'gatsby';
import React from 'react';
import { cleanPathString } from '../helpers/helpers';
import { useLocation } from '@reach/router';
import { SideNav, SideNavItems } from '@carbon/react';
import buildSiteMap, { MenuItem } from '../helpers/buildSiteMap';
import { TreeNode, TreeView } from '@carbon/react';
import { navigate } from 'gatsby';

interface NavBarProps {
  navItems: MenuItem[];
  currentPath: string;
  depth?: number;
  index?: string;
}

const LinkItem = ({ slug, name }: { slug: string; name: string }) => <Link to={slug}>{name}</Link>;

// Not used due to issue with fragments
const TreeNavBar = (props: NavBarProps) => {
  const { navItems, currentPath, depth = 0, index = 'nav' } = props;

  return (
    <>
      {navItems.map((item, i) => {
        const { children, name, slug } = item;
        const isActive = cleanPathString(slug) === currentPath;

        const indexString = `${index}-${i}`;

        return children.length > 0 ? (
          <TreeNode key={indexString} id={indexString} value={name} label={name} selected={[]}>
            <TreeNode
              selected={[]}
              key={`${indexString}-start`}
              id={`${indexString}-start`}
              value={name}
              label={<LinkItem slug={slug} name={name} />}
            />
            <TreeNavBar
              navItems={children}
              currentPath={currentPath}
              depth={depth + 1}
              index={indexString}
            />
          </TreeNode>
***REMOVED*** : (
          <TreeNode
            selected={[]}
            key={indexString}
            id={indexString}
            value={name}
            label={<LinkItem slug={slug} name={name} />}
          />
***REMOVED***;
  ***REMOVED***)}
    </>
  );
};

const arrTreeNavBar = (props: NavBarProps): React.ReactNode[] => {
  const { navItems, currentPath } = props;

  return navItems.map((item) => {
    const { children, name, slug } = item;
    // const isActive = cleanPathString(slug) === currentPath;

    return children.length > 0 ? (
      React.createElement(
        TreeNode,
        { key: name, id: name, value: name, label: name },
        <TreeNode key={`${name}-start`} id={`${name}-start`} value={name} label={name} />,
        ...arrTreeNavBar({
          navItems: children,
          currentPath: currentPath
    ***REMOVED***)
      )
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
        {React.createElement(
          TreeView,
          { label: 'Files', className: styles.tree, hideLabel: true },
          arrTreeNavBar({ navItems: siteMap, currentPath: cleanPathName })
***REMOVED***}
      </SideNavItems>
    </SideNav>
  );
};
export default TreeSideBar;
