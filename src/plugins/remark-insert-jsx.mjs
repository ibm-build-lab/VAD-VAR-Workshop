import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxFromMarkdown } from 'mdast-util-mdx';
import { mdxjs } from 'micromark-extension-mdxjs';
import { EXIT, visit } from 'unist-util-visit';

/**
 * Inserts JSX element into the abstract syntax tree under the H1 tag
 */
export default function remarkInsertJSXAfterHeader() {
  return (root) => {
    const { children } = fromMarkdown(
      '<SubHeader timeToComplete={props.pageContext.frontmatter.timeToComplete} updated={props.pageContext.frontmatter.updated}/>',
      {
        extensions: [mdxjs()],
        mdastExtensions: [mdxFromMarkdown()]
  ***REMOVED***
    );

    const headerPosition = (() => {
      let position;
      visit(
        root,
        (node) => {
          const { type, depth } = node;
          return type === 'heading' && depth === 1;
    ***REMOVED***,
        (_, index) => {
          if (index === null) return EXIT;
          position = index + 1;
          return EXIT;
    ***REMOVED***
      );

      return position;
***REMOVED***)();

    if (headerPosition) root.children.splice(headerPosition, 0, ...children);
    return root;
  };
}
