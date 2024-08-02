'use client';

import { SideNavLinkText, usePrefix } from '@carbon/react';
import type { Icon as CarbonIconType } from '@carbon/react/icons';
import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import shellStyles from '../UIShell.module.scss';
import styles from './CustomSideNavItem.module.scss';

interface CustomSideNavItemProps {
  href: string;
  children: ReactNode;
  depth?: number;
  renderIcon?: typeof CarbonIconType;
}

/**
 * Custom sidenav items in order to use Next.js built-in Link for prefetching.
 * Based on original Carbon source.
 *
 * @see https://github.com/carbon-design-system/carbon/blob/main/packages/react/src/components/UIShell/SideNavMenuItem.tsx
 */
export default function CustomSideNavItem(props: CustomSideNavItemProps) {
  const { href, children, renderIcon: CustomIconElement, depth = 0 } = props;
  const prefix = usePrefix();
  const pathname = usePathname();

  const isActive = pathname === href;
  const linkClassName = cx(
    `${prefix}--side-nav__link`,
    shellStyles[`pl-${depth}`],
    styles.sideNavMenuItem,
    isActive && `${prefix}--side-nav__link--current`
  );

  const itemClassName =
    depth === 0
      ? `${prefix}--side-nav__item`
      : `${prefix}--side-nav__menu-item`;

  return (
    <li className={itemClassName}>
      <Link href={href} className={linkClassName}>
        {CustomIconElement && (
          <div className={`${prefix}--tag__custom-icon`}>
            <CustomIconElement />
          </div>
***REMOVED***}
        <SideNavLinkText>{children}</SideNavLinkText>
      </Link>
    </li>
  );
}
