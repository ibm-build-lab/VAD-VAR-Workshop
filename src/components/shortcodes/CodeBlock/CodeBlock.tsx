'use client';

import { IconButton as CopyButton } from '@carbon/react';
import { Copy } from '@carbon/react/icons';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { useTranslations } from 'next-intl';
import { createElement, useRef } from 'react';
import styles from './CodeBlock.module.scss';
import './highlight.scss';

type CodeBlockProps = React.HTMLAttributes<HTMLElement>;

const CODE_CLASS_REGEX = new RegExp(`^language-.*`, 'i');

export default function CodeBlock(props: CodeBlockProps) {
  const { children, className } = props;

  const isInline = !className?.includes('hljs');

  const lang = className
    ?.split(' ')
    .filter((c) => CODE_CLASS_REGEX.test(c))
    .map((i) => i.split('-').slice(1).join('-'))
    .join(' ');

  return createElement(
    isInline ? InlineCodeBlock : MultiLineCodeBlock,
    { codeLang: lang || '' },
    children
  );
}

/**
 * Code block fragments used inside other text element
 */
function InlineCodeBlock(props: CodeBlockProps) {
  const { children } = props;
  return <code className={styles.inline}>{children}</code>;
}

/**
 * Multiline code block for copying with syntax highlighting
 */
function MultiLineCodeBlock(props: CodeBlockProps & { codeLang: string }) {
  const { children, codeLang } = props;
  const [_copiedText, copyToClipboard] = useCopyToClipboard();
  const codeRef = useRef<HTMLElement>(null);
  const t = useTranslations('components.CodeBlock');

  const copyCode = () =>
    codeRef.current && copyToClipboard(codeRef.current.textContent!);

  return (
    <div className={styles.multiline}>
      <div className={styles.codeWrapper}>
        <code ref={codeRef}>{children}</code>
      </div>
      <div className={styles.panel}>
        <span className={styles.lang}>{codeLang}</span>
        <CopyButton
          className={styles.copyButton}
          size='md'
          kind='ghost'
          align='bottom-right'
          label={t('copyText')}
          onClick={copyCode}>
          <Copy />
        </CopyButton>
      </div>
    </div>
  );
}
