import * as styles from '../styles/components/SideBar.module.scss';
import { Link } from 'gatsby';
import React from 'react';
import { cleanPathString } from '../helpers/helpers';
import cx from 'classnames';
import { useLocation } from '@reach/router';
import { usePrefix } from '@carbon/react';
import { SideNav, SideNavDivider, SideNavItems, SideNavLinkText, SideNavMenu } from '@carbon/react';
import { graphql, useStaticQuery } from 'gatsby';

interface MDXNode {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
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

interface SmartLinkProps {
  href: string;
  children: NonNullable<React.ReactNode>;
  isActive?: boolean;
  style?: object;
}

interface NavBarProps {
  navItems: MenuItem[];
  currentPath: string;
  depth?: number;
}

// build site map tree
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
          frontmatter {
            title
      ***REMOVED***
          tableOfContents(maxDepth: 1)
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  `);

  const slugList: SlugItem[] = (nodes as MDXNode[])
    .map(({ fields, tableOfContents, frontmatter }) => ({
      slug: fields.slug,
      title:
        frontmatter?.title || (tableOfContents?.items && tableOfContents?.items[0]?.title) || ''
***REMOVED***))
    .filter(({ slug }) => !!slug)
    .sort((a, b) => a.slug.localeCompare(b.slug));

  // recursive insert pass by reference
  const insertNested = (array: MenuItem[], splitPath: string[], curr: SlugItem) => {
    let index = array.findIndex((item) => item.root === splitPath[0]);
    if (index < 0) {
      // insert in-place
      array.splice(array.length, 0, {
        name: curr.title,
        slug: `/${curr.slug}`,
        children: [],
        root: splitPath[0]
  ***REMOVED***);
      index = array.length;
***REMOVED***

    splitPath.shift();
    if (splitPath.length > 0) insertNested(array[index].children, splitPath, curr);
  };

  return (
    slugList.reduce((acc, curr) => {
      const { slug } = curr;
      const splitSlug = slug.split('/').filter((s: string) => !!s);
      insertNested(acc, splitSlug, curr);
      return acc;
***REMOVED***, []) as MenuItem[]
  ).sort((a, b) => a.children.length - b.children.length);
};

// custom link implementation to stop remounts
const CustomSideNavItem = (props: SmartLinkProps) => {
  const prefix = usePrefix();
  const { href, children, isActive = false, style = {} } = props;

  const linkClassName = cx(
    `${prefix}--side-nav__link`,
    isActive && `${prefix}--side-nav__link--current`
  );

  return (
    <li className={`${prefix}--side-nav__menu-item`} style={style}>
      <Link to={href} className={linkClassName}>
        <SideNavLinkText>{children}</SideNavLinkText>
      </Link>
    </li>
  );
};

// build side nav recursively
const NavBar = (props: NavBarProps) => {
  const { navItems, currentPath, depth = 0 } = props;

  return (
    <>
      {navItems.map((item, index) => {
        const { children, name, slug } = item;
        const isActive = cleanPathString(slug) === currentPath;
        return children.length > 0 ? (
          <SideNavMenu key={index} title={name} defaultExpanded>
            <CustomSideNavItem href={slug} isActive={isActive}>
              {name}
            </CustomSideNavItem>
            <NavBar navItems={children} currentPath={currentPath} depth={depth + 1} />
          </SideNavMenu>
***REMOVED*** : (
          <CustomSideNavItem key={index} href={slug} isActive={isActive}>
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
