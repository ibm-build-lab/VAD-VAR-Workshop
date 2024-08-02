import path from 'path';
import { defineConfig, s } from 'velite';
import { generateSlugFromPath, parseLocaleFromFilePath } from '#/lib/helpers';

const IS_DEV = process.env.NODE_ENV === 'development';

export default defineConfig({
  root: './content',
  collections: {
    fragments: {
      name: 'Fragment',
      pattern: 'fragments/**/*.{md,mdx}',
      schema: s
        .object({
          name: s.string(),
          raw: s.raw(),
          file_path: s.path()
        })
        .transform((data) => {
          const { file_path } = data;
          const { locale } = parseLocaleFromFilePath(file_path + '.md');
          return {
            ...data,
            locale,
            file_path: path.join('content', file_path)
          };
        })
    },
    labs: {
      name: 'Lab',
      pattern: ['labs/**/*.{md,mdx}'].concat(
        !IS_DEV ? ['!labs/test/**/*.{md,mdx}'] : []
      ),
      schema: s
        .object({
          // frontmatter data
          title: s.string().max(99).optional(),
          desc: s.string().optional(),
          updated: s.isodate().optional(),
          timeToComplete: s.number().optional(),
          toc: s.boolean().optional(),
          level: s.string().optional(),
          // other items
          file_path: s.path(),
          toc_tree: s.toc({ maxDepth: 3 }),
          raw: s.raw(),
          excerpt: s.excerpt({ length: 160 })
        })
        .transform((data) => {
          const { title: t = '', toc_tree, excerpt, file_path } = data;

          const { locale } = parseLocaleFromFilePath(file_path + '.md');
          const slug = generateSlugFromPath(file_path + '.md', { start: 1 });

          const tocTitle = toc_tree.length > 0 ? toc_tree[0].title : '';
          const title = t ? t : tocTitle;

          return {
            ...data,
            slug,
            locale,
            title,
            excerpt: `${excerpt}...`,
            file_path: path.join('content', file_path)
          };
        })
    }
  }
});
