import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Props } from '@mdx-js/react/lib';
import loadable, { LoadableComponent } from '@loadable/component';

interface MDXWrapperProps {
  children: React.ReactNode;
  components?: Props['components'];
}

type Replacer = keyof typeof import('../replacements/index');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DynamicComponent = (n: Replacer): LoadableComponent<any> =>
  loadable(() => import('../replacements').then((m) => m[n]));

const standardComponents: Props['components'] = {
  table: DynamicComponent('TableWrapper'),
  a: DynamicComponent('SmartLink'),
  blockquote: DynamicComponent('BlockQuote'),
  SubHeader: DynamicComponent('SubHeader'),
  img: DynamicComponent('ImageWrapper'),
  code: DynamicComponent('CodeBlock'),
  QuizAlert: DynamicComponent('QuizAlert'),
  Danger: DynamicComponent('Danger'),
  Warning: DynamicComponent('Warning'),
  TokenizationApplet: DynamicComponent('TokenizationApplet'),
  CopyText: DynamicComponent('CopyText')
};

const MDXWrapper = ({ children, components = {} }: MDXWrapperProps) => {
  return (
    <MDXProvider
      components={{
        ...standardComponents,
        ...components
  ***REMOVED***}>
      {children}
    </MDXProvider>
  );
};

export default MDXWrapper;
