import remarkPresetLintConsistent from 'remark-preset-lint-consistent'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'
import remarkFrontmatter from 'remark-frontmatter';
import remarkLintFrontmatterSchema from 'remark-lint-frontmatter-schema';
import mdxConfig from './mdx.config.mjs'

const { schemas: { labs } } = mdxConfig;

const config = {
  settings: {},
  plugins: [
    remarkPresetLintConsistent,
    remarkPresetLintRecommended,
    "preset-lint-consistent",
    "preset-lint-recommended",
    "remark-preset-lint-markdown-style-guide",
    "preset-prettier",
    ["remark-lint-no-empty-url", ["error"]],
    ["remark-lint-first-heading-level", ["error"]],
    ["remark-lint-no-emphasis-as-heading", ["error"]],
    ["remark-lint-blockquote-indentation", ["error"]],
    ["remark-lint-no-paragraph-content-indent", ["error"]],
    ["remark-lint-list-item-content-indent", ["error"]],
    ["remark-lint-list-item-indent", [2, 'space']],
    // ["remark-lint-list-item-spacing", ["error"]],
    remarkFrontmatter,
    [remarkLintFrontmatterSchema, ['error', { embed: labs }]],
  ]
}

export default config;

