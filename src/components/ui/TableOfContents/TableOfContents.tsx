'use client';

import { Accordion, AccordionItem, Layer } from '@carbon/react';
import type { Lab } from '../../../../.velite';
import styles from './TableOfContent.module.scss';

interface TableOfContentsProps {
  toc: Lab['toc_tree'];
  depth?: number;
  maxDepth?: number;
}

function TOCTree(props: TableOfContentsProps) {
  const { toc, depth = 1, maxDepth = -1 } = props;

  const nextDepth = depth + 1;

  return (
    <div>
      {toc.map((item) => {
        const { items, title, url } = item;

        return (
          <>
            <span>
              <a href={url} className={styles[`depth-${depth}`]}>
                {title}
              </a>
            </span>

            {items && items.length > 0 && nextDepth !== maxDepth && (
              <TOCTree toc={items} depth={nextDepth} />
            )}
          </>
        );
      })}
    </div>
  );
}

export default function TableOfContents(
  props: Pick<TableOfContentsProps, 'toc' | 'maxDepth'>
) {
  const { toc, maxDepth = -1 } = props;

  return (
    <Layer level={2}>
      <Accordion size='lg'>
        <AccordionItem title='Table Of Contents'>
          <TOCTree toc={toc} maxDepth={maxDepth} />
        </AccordionItem>
      </Accordion>
    </Layer>
  );
}
