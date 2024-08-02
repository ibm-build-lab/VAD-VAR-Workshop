import { SideNavMenu } from '@carbon/react';
import { usePathname } from 'next/navigation';
import { memo } from 'react';
import { SlugTree } from '#/lib/velite/generate-tree';
import CustomSideNavItem from '../CustomSideNavItem';
import styles from '../UIShell.module.scss';

interface SideNavProps {
  navItems: NonNullable<SlugTree['children']>;
  depth?: number;
}

export default memo(function SideNavTree(props: SideNavProps) {
  const { navItems, depth = 0 } = props;
  const pathname = usePathname();

  return (
    <>
      {Object.values(navItems).map((item) => {
        const { title, slug, children } = item;
        const expanded = pathname?.startsWith(slug!);

        return children == undefined ? (
          <CustomSideNavItem
            href={slug as string}
            depth={depth}
            key={`${title}-item`}>
            {title as string}
          </CustomSideNavItem>
***REMOVED*** : (
          <SideNavMenu
            key={`${title}-inner-menu`}
            className={styles[`pl-${depth}`]}
            title={title as string}
            defaultExpanded={expanded}>
            {slug && title && (
              <CustomSideNavItem
                href={slug}
                depth={depth + 1}
                key={`${title}-item`}>
                {title}
              </CustomSideNavItem>
    ***REMOVED***}
            {children && (
              <SideNavTree
                navItems={children}
                depth={depth + 1}
                key={`${title}-tree`}
              />
    ***REMOVED***}
          </SideNavMenu>
***REMOVED***;
  ***REMOVED***)}
    </>
  );
});
