import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import * as mdxComponents from '../replacements';
import { Props } from '@mdx-js/react/lib';

interface MDXWrapperProps {
  children: React.ReactNode;
  components?: Props['components'];
}

const standardComponents: Props['components'] = {
  table: mdxComponents.TableWrapper,
  a: mdxComponents.SmartLink,
  blockquote: mdxComponents.BlockQuote,
  SubHeader: mdxComponents.SubHeader,
  img: mdxComponents.ImageWrapper,
  code: mdxComponents.CodeBlock,
  QuizAlert: mdxComponents.QuizAlert
};

const MDXWrapper = React.memo(function MDXWrapper({ children, components = {} }: MDXWrapperProps) {
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
