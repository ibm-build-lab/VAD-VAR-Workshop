'use client';

import { Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { Home } from '@carbon/react/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import type { collectBreadcrumbs } from '#/lib/velite';

interface BreadCrumbsProps {
  breadcrumbs: ReturnType<typeof collectBreadcrumbs>;
}

export default function BreadCrumbs(props: BreadCrumbsProps) {
  const { breadcrumbs } = props;
  const locale = useLocale();
  const router = useRouter();

  return (
    <Breadcrumb noTrailingSlash>
      <BreadcrumbItem>
        <Link href={`/${locale}`}>
          <Home
            size={16}
            onClick={() => router.push(`/${locale}`)}
            onMouseEnter={() => router.prefetch(`/${locale}`)}
          />
        </Link>
      </BreadcrumbItem>
      {breadcrumbs.map((part, index) => {
        const { slug, title } = part;
        return (
          <BreadcrumbItem
            key={index}
            isCurrentPage={index === breadcrumbs.length - 1}>
            <Link href={slug}>{title}</Link>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
