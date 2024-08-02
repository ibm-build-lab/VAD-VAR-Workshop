---
title: TEST PAGES
updated: 2024-03-17
---

# Welcome

This is a living example of how MDX syntax is translated into a static page within the site.

It also contains links to other documentation about the various inner workings of the site to help get a better understanding of how it works.

Out-of-the-box the template is already set up for:

- Styling for most basic HTML-Markdown analogs like:
  - Lists (Ordered and Unordered)
  - Tables
  - Headings
  - Codeblocks (with highlighting via `rehype-highlight`)
- Linting with ESLint
  - MDX/Markdown support via `eslint-plugin-mdx` and `remark-lint` plugins
- Unit testing setup with `vitest`
- SEO metadata based on frontmatter properties for:
  - OpenGraph
  - Twitter
  - JSON-LD
- Localization via `next-intl`

## Basic documentation

Some general items about how to create new content.

<TileGrid>
  <NavTile to='/test/1-getting-started' />
  <NavTile to='/test/2-writing-content' />
</TileGrid>

## Implementation details

These pages refer to documentation on the actual inner workings of the site. They answer questions like:

- _How is the site's styling handled?_
- _How is MDX content sourced to create pages?_
- _How is a page's URL slug calculated?_
- _How is Markdown transformed into JSX?_

<TileGrid>
  <NavTile to='/test/3-carbon' />
  <NavTile to='/test/4-content-sourcing' />
  <NavTile to='/test/5-content-loading' />
  <NavTile to='/test/6-localization' />
</TileGrid>

## Extending

These pages explain how to extend existing features that are already setup:

<TileGrid></TileGrid>

## Styling verification

These pages exist to verify the styling of various content items.

<TileGrid>
  <NavTile to='/test/7-custom-components' />
</TileGrid>
