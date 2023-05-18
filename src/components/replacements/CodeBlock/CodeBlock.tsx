import React from 'react';
import * as styles from './CodeBlock.module.scss';
import cx from 'classnames';
import { CodeSnippet } from '@carbon/react';
import { CodeSnippetMultiProps } from 'carbon-components-react';

interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
  'data-language'?: string;
}

const CodeBlock = (props: CodeBlockProps) => {
  const { children } = props;

  const isInline = props['data-language'] === undefined || React.isValidElement(children);

  const codeSnippetProps = {
    type: isInline ? 'inline' : 'multi',
    className: cx(styles.code, (!isInline && styles.codeBlock) || styles.codeInline),
    ...((!isInline && {
      wrapText: true
***REMOVED***) ||
      {})
  } as CodeSnippetMultiProps;

  return <CodeSnippet {...codeSnippetProps}>{children}</CodeSnippet>;
};

export default CodeBlock;
