import { SideNav, SideNavMenuItem, SideNavItems, SideNavMenu, SideNavDivider } from '@carbon/react';
import React from 'react';
import * as styles from '../styles/components/SideBar.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { cleanPathString } from '../helpers/helpers';

interface SideBarProps {
  currentPath: string;
}

interface MDXNode {
  fields: {
    slug: string;
  };
  tableOfContents: {
    items: {
      url: string;
      title: string;
***REMOVED***[];
  };
}

interface MenuItem {
  name: string;
  slug: string;
  root: string;
  children: MenuItem[];
}

interface SlugItem {
  slug: string;
  title: string;
}

interface NavBarProps {
  navItems: MenuItem[];
  currentPath: string;
}

const buildSiteMap = () => {
  const {
    allMdx: { nodes }
  } = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          fields {
            slug
      ***REMOVED***
          tableOfContents(maxDepth: 1)
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  `);

  const slugList: SlugItem[] = (nodes as MDXNode[])
    .map(({ fields, tableOfContents }) => ({
      slug: fields.slug,
      title: tableOfContents.items[0].title
***REMOVED***))
    .filter(({ slug }) => !!slug)
    .sort((a, b) => a.slug.localeCompare(b.slug));

  // recursive insert pass by reference
  const insertNested = (array: MenuItem[], path: string[], curr: SlugItem) => {
    let index = array.findIndex((item) => item.root === path[0]);
    if (index < 0) {
      // insert in-place
      array.splice(array.length, 0, {
        name: curr.title,
        slug: `/${curr.slug}`,
        children: [],
        root: path[0]
  ***REMOVED***);
      index = array.length;
***REMOVED***

    path.shift();
    if (path.length > 0) insertNested(array[index].children, path, curr);
  };

  return slugList.reduce((acc, curr) => {
    const { slug } = curr;
    const splitSlug = slug.split('/').filter((s: string) => !!s);
    insertNested(acc, splitSlug, curr);
    return acc;
  }, []) as MenuItem[];
};

const NavBar = (props: NavBarProps) => {
  const { navItems, currentPath } = props;

  return (
    <>
      {navItems.map((item, index) => {
        const { children, name, slug } = item;
        const isActive = cleanPathString(slug) === currentPath;
        return children.length > 0 ? (
          <SideNavMenu key={index} title={name} defaultExpanded>
            <SideNavMenuItem href={slug} isActive={isActive}>
              {name}
            </SideNavMenuItem>
            <NavBar navItems={children} currentPath={currentPath} />
          </SideNavMenu>
***REMOVED*** : (
          <SideNavMenuItem isActive={isActive} key={index} href={slug}>
            {name || ''}
          </SideNavMenuItem>
***REMOVED***;
  ***REMOVED***)}
    </>
  );
};

const SideBar = (props: SideBarProps) => {
  const { currentPath } = props;
  const siteMap = buildSiteMap();
  return (
    <SideNav
      isFixedNav
      expanded
      aria-label='Side navigation'
      className={styles.sidebar}
      isChildOfHeader={true}>
      <SideNavItems>
        <SideNavMenuItem href='/'>Home</SideNavMenuItem>
        <SideNavDivider />
        <NavBar navItems={siteMap} currentPath={currentPath} />
      </SideNavItems>
    </SideNav>
  );
};

export default SideBar;
