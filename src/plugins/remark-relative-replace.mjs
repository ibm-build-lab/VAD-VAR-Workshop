import { CONTINUE, visit } from 'unist-util-visit';

export default function remarkRelativeReplace() {
  return (tree) => {
    visit(
      tree,
      (node) => {
        return (
          node.type === 'link' &&
          node.url &&
          !node.url.startsWith('//') &&
          !node.url.startsWith('http') &&
          !node.url.startsWith('#')
***REMOVED***;
  ***REMOVED***,
      (node) => {
        node.url = node.url.toLowerCase().replace('/content/', '/');
        return CONTINUE;
  ***REMOVED***
    );

    return tree;
  };
}
