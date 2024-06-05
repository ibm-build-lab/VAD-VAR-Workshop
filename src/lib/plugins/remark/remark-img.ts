import path from 'path';
import type { Node } from 'unist';
import { visit } from 'unist-util-visit';
import { isURLRelative } from '#/lib/helpers';

interface Options {
  prepend: string;
}

/**
 * Prepends an images url with a input string
 *
 * Meant only to be used in a Node environment due to use of native `path` module
 *
 * @param {Options} options
 * @returns transformer function for comsumption as plugin
 */
export default function remarkImage(options: Options) {
  function visitor(node: Node) {
    if (
      'url' in node &&
      typeof node.url === 'string' &&
      isURLRelative(node.url)
    ) {
      const { prepend } = options;
      const test = [...prepend.split('/'), ...node.url.split('/')];
      node.url = '/' + path.join(...test);
    }
  }

  return function transform(tree: Node) {
    if (options && options.prepend) {
      visit(tree, 'image', visitor);
    } else {
      throw Error('Missing required `prepend` option.');
    }
  };
}
