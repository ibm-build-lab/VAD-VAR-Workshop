---
title: Content Parsing
updated: 2024-03-06
timeToComplete: 15
desc: How raw MDX is translated into a React element on a page
---

# Content Parsing

Content is originally stored as MDX files within the `content` directory at the root of the project. Those familiar with Markdown will have no problem writing MDX as it is a superset of Markdown that allows for JSX syntax.

Our main use case for MDX over plain Markdown is the ability to drop custom components inline. This allows for interactive content to live alongside static markup.

For more information on these custom components in action see the page on [Custom Components](/docs/custom-components). This page will primarily deal with the inner workings of the transformation from markup to HTML/JSX.

## `@next/mdx` pitfall

Though Vercel does have out-of-the-box support for MDX via `@next/mdx` this preloader forces content to live within the `app` directory and conform the filesystem routing [outlined](https://nextjs.org/docs/app/building-your-application/routing). This is rather restricting with a large amount of content like our site (and even more restricting if the content is to be sourced remotely).

For finer control, `next-mdx-remote` was chosen due to its support for various customization features as well as the ability to directly compile raw MDX into a React element without the need for client providers.

> This essentially means a large amount of the MDX will be transformed to simple HTML

## Frontmatter data

Contained within each MDX file you might see it prefixed with a small amount of YAML. This is called **frontmatter data** and is utilized later down the line in various ways. Currently supported values include:

| Name      | Type       | Description                                  |
| --------- | ---------- | -------------------------------------------- |
| `title`   | `string`   | Used as title with side navigation           |
| `updated` | `date`     | Sourced in page headers                      |
| `toc`     | `boolean`  | Whether to render table of contents for page |
| `tags`    | `string[]` | Allows for grouping topics covered           |

> All of these fields **_are optional_**.

## From MDX to JSX

In order for our raw MDX content to eventually become JSX that is displayed on a page it must be transformed from one to the other.

This section will try and explain that process as well as how the various tools we use fit into it.

> As a note. We don't actually instrument alot of this ourselves. `next-mdx-remote` accepts various options that handle this for us. But it might be useful to get some insight into the process.

### Compilation and ASTs

This process is most similar to a **compilation step** like how the C compiler takes code and generates an executable. The difference being our target is not an executable binary but a different markup language (so essentially transpilation but the analogy holds).

The most popular tooling that exists for this situation is called `remark` (for Markdown) and `rehype` (for HTML). Both of which are designed to be used by `unified` (ecosystem designed around transforming content).

These tools are designed to handle the syntax trees that can represent their respective content. The main two we care about are:

- Markdown Abstract Syntax Tree [(MDAST)](https://github.com/syntax-tree/mdast)
- HTML Abstract Syntax Tree [(HAST)](https://github.com/syntax-tree/hast)

It's these trees that both `remark` and `rehype` act on respectively; with both being designed to conform to the `unist` [specification](https://github.com/syntax-tree/unist).

A high-level overview of the process would look like:

```md
# Transformation pipeline

Raw Markup -> MDAST
MDAST - remark transformations applied
MAST -> HAST
HAST - rehype transformations applied
HAST -> JSX
```

It gets a bit more complex as MDX extends both MDAST and HAST through MDXAST and HXAST respectively. But they are just supersets of the other trees that allow for special MDX syntax.

### Plugins

In this pipeline, we can interact with the syntax trees representing Markdown and HTML. This is available via **plugins**. These **plugins** are functions that are passed the entirety of the syntax tree with which they can do whatever they please.

> So long as the resulting syntax tree from a plugin is still a valid AST

Luckily a lot of different plugins are already maintained within the community for common use cases. Here is a list of some of the ones used on our site:

| Name                       | Purpose                                                                                | Documentation                                                |
| -------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `remark-gfm`               | Allows for GitHub Flavored Markdown to be parsed properly.                             | [here](https://github.com/remarkjs/remark-gfm)               |
| `remark-breaks`            | Allows line breaks to be parses as-is written.                                         | [here](https://github.com/remarkjs/remark-breaks)            |
| `rehype-highlight`         | Allows for syntax highlight of multi-line code blocks.                                 | [here](https://github.com/rehypejs/rehype-highlight)         |
| `rehype-slug`              | Appends ids to heading elements.                                                       | [here](https://github.com/rehypejs/rehype-slug)              |
| `rehype-autolink-headings` | Creates hash links for headings with id attributes. Works in tandem with `rehype-slug` | [here](https://github.com/rehypejs/rehype-autolink-headings) |

But there are [many](https://github.com/remarkjs/remark/blob/main/doc/plugins.md), [many](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md) more available.

### Custom transformation plugins

Some custom plugins have also been created to account for some of edge cases and are listed below. All of them are exported from `src/lib/plugins` directory within the project.

### `remark-img`

Given our images currently live next to our content we need some way of transforming the relative links we use when writing content into links that can be properly understood as static assets. This plugin does just that. It can also act to reference remote URLs within the GitHub repository when configured to do so.

It is applied during the MDX compilation step in `src/lib/mdx/compile-content.ts`.

<Warning>
**It only acts on images with relative source values**
</Warning>

### `remark-localize-links`

When writing relative links within our markup it makes more sense to write them with respect to the filesystem they originate from. Thus they do not have their locale prefixed to them like the resulting static pages do. This plugin will transform any relative links within your content to be localized based on the locale of the generated page.

It is applied during the MDX compilation step in `src/lib/mdx/compile-content.ts`.

<Warning>
It will **only** transform relative links
</Warning>

#### Helper utilities

Various helper utilities exist within the `unist` ecosystem to help solve common problems when parsing an AST. For instance, within this repo, we use:

- `unist-util-visit`: helps to walk an AST
- `unist-util-select`: query for specific nodes in the tree

A full list can be found [here](https://github.com/syntax-tree/unist?tab=readme-ov-file#list-of-utilities).

When writing any custom plugin these utilities become invaluable assets as they are able to parse any AST that conforms to the `unist` spec.

## Images

Images are handled differently in the development and production environments.

For more information on use and implementation read [here](/testing/image-test)

### Local Development

When running the development server images will be sourced locally from the `content` folder. However, because of how [static assets](https://nextjs.org/docs/app/building-your-application/optimizing/static-assets) are handled in Next.js they are expected to originally be located in the `public` folder.

In order to _"cheat"_ this a symlink has been created in the `public` folder to point to the `content` folder so that images can remain in-place there.

For more info on the inner workings of this see `src/lib/plugins/remark-image` within the repo.

### Production

In a production build images are sourced **remotely**.

Since our site is hosted as static assets within Github Pages it would be redundant to have them included in the final build assets. Because of this, when a production version of the site is built all relative image links will have their paths transformed point to the content hosted in the `main` repo on public GitHub.

<Danger>
If you make a production build of the site locally and cannot see your images that is because they are not yet within the `main` branch of the repo. Instead, to test a static build with local assets run `npm run build:local`.
</Danger>
