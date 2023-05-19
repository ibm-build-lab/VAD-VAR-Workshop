import React, { HTMLAttributes, isValidElement } from 'react';
import cx from 'classnames';
import { CodeSnippet } from '@carbon/react';
import * as styles from './CodeBlock.module.scss';

interface CodeBlockProps extends HTMLAttributes<HTMLElement> {
  'data-language'?: string;
}

const CodeBlock = (props: CodeBlockProps) => {
  const { children } = props;
  const isInline = props['data-language'] === undefined || isValidElement(children);

  const codeProps: any = {
    type: isInline ? 'inline' : 'multi',
    wrapText: isInline,
    className: cx(styles.code, (!isInline && styles.codeBlock) || styles.codeInline)
  };

  return <CodeSnippet {...codeProps}>{children}</CodeSnippet>;
};

export default CodeBlock;
