import 'server-only';

import path from 'path';
import { compileMDX, MDXRemoteProps } from 'next-mdx-remote/rsc';
import type { PluggableList } from 'unified';
import { remarkImage, remarkLocalizeLinks } from '#/lib/plugins/remark';
import mdxConfig from '#mdx-config';
import { SLUG_MAP, collectBreadcrumbs } from '../velite';
import shortcodes from './shortcodes';

const {
  plugins: { remarkPlugins: defRemarkPlugins, rehypePlugins: defRehypePlugins }
} = mdxConfig;

type ComponentMap = MDXRemoteProps['components'];

type Plugins = {
  rehypePlugins?: PluggableList;
  remarkPlugins?: PluggableList;
};

/**
 * Compiles raw MDX string to final rendered element
 *
 * @param {string} slug page to render
 * @returns compiled content and metadata
 */
export default async function compileContent(
  slug: string,
  overrides: ComponentMap = {},
  plugins: Plugins = {}
) {
  const { rehypePlugins = [], remarkPlugins = [] } = plugins;

  const item = SLUG_MAP[slug];

  if (!item) {
    throw new Error(`${slug} does not exist`);
  }

  const {
    raw,
    file_path,
    toc_tree,
    updated,
    title,
    timeToComplete,
    toc,
    locale,
    level
  } = item;

  const { dir } = path.parse(file_path);
  const imagePath = path.normalize(dir);

  const { content } = await compileMDX({
    source: raw,
    components: { ...shortcodes, ...overrides },
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [
          ...defRemarkPlugins,
          ...remarkPlugins,
          [remarkImage, { prepend: imagePath }],
          [remarkLocalizeLinks, { locale }]
        ],
        rehypePlugins: [...defRehypePlugins, ...rehypePlugins]
      }
    }
  });

  return {
    content,
    breadcrumbs: collectBreadcrumbs(slug),
    toc: toc_tree,
    frontmatter: {
      level,
      title,
      toc,
      updated,
      timeToComplete
    }
  };
}
