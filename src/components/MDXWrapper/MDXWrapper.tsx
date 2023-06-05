import React, { memo } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Props } from '@mdx-js/react/lib';
import {
  BlockQuote,
  CodeBlock,
  Danger,
  ImageWrapper,
  QuizAlert,
  SmartLink,
  SubHeader,
  TableWrapper,
  Warning
  CopyText
} from '../replacements';

interface MDXWrapperProps {
  children: React.ReactNode;
  components?: Props['components'];
}

const standardComponents: Props['components'] = {
  table: TableWrapper,
  a: SmartLink,
  blockquote: BlockQuote,
  SubHeader: SubHeader,
  img: ImageWrapper,
  code: CodeBlock,
  QuizAlert,
  Danger,
  Warning
  QuizAlert: QuizAlert,
  CopyText: CopyText
};

const MDXWrapper = memo(function MDXWrapper({ children, components = {} }: MDXWrapperProps) {
  return (
    <MDXProvider
      components={{
        ...standardComponents,
        ...components
  ***REMOVED***}>
      {children}
    </MDXProvider>
  );
});

export default MDXWrapper;
