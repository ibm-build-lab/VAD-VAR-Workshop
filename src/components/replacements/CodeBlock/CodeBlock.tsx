import React, { HTMLAttributes } from 'react';
import cx from 'classnames';
import { CodeSnippet } from '@carbon/react';
import * as styles from './CodeBlock.module.scss';
import '@styles/highlight.scss';

interface CodeBlockProps extends HTMLAttributes<HTMLElement> {
  'data-language'?: string;
}

const CodeBlock = (props: CodeBlockProps) => {
  const { children, 'data-language': progLang, className = '' } = props;

  const isInline = !(progLang !== undefined || className.split(' ').includes('hljs'));

  const codeProps: any = {
    type: isInline ? 'inline' : 'multi',
    wrapText: isInline,
    className: cx(styles.code, (!isInline && styles.codeBlock) || styles.codeInline)
  };

  return <CodeSnippet {...codeProps}>{children}</CodeSnippet>;
};

export default CodeBlock;
