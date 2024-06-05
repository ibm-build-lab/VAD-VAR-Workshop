import path from 'path';
import type { Node } from 'unist';
import { CONTINUE, visit } from 'unist-util-visit';
import { isURLRelative } from '#/lib/helpers';

interface Options {
  locale: string;
}

/**
 * Prepends all relative links with a specified locale
 *
 * @param options
 * @returns transformer function for comsumption as plugin
 */
export default function remarkLocalizeLinks(options: Options) {
  function visitor(node: Node) {
    if (
      'url' in node &&
      typeof node.url === 'string' &&
      isURLRelative(node.url)
    ) {
      node.url = path.normalize(`/${options.locale}/${node.url}`);
    }
    return CONTINUE;
  }

  return function transform(tree: Node) {
    if (options && options.locale) {
      visit(tree, 'link', visitor);
    } else {
      throw Error('Missing required `locale` option.');
    }
  };
}
