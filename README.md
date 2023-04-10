# VAD VAR Workshop Docs

This repo contains the site code for IBM Ecosystem partners content (primarily our Value-Added Distributors and Value-Added Resellers) to build experiential sales skills with various IBM products.

To see the content itself visit: https://vest.buildlab.cloud/

Built using:

- [Gatsby](https://www.gatsbyjs.com/docs/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [MDX](https://mdxjs.com/docs/)
- [Carbon Design System](https://carbondesignsystem.com/)

## Getting started

Before installing any dependencies ensure you have the proper prerequisites installed:

- npm (recommended minimum of `v8.0.0`)
- node (`v18.0.0` is a required minimum with this version of Gatsby)

In order to get up and running locally the first step is to run:

```bash
npm ci
```

After this you can run:

```bash
npm run dev
```

This will start the development server at http://localhost:8000.

> Note: The current version of `@carbon/react` seems to not support [TypeScript types out of the box](https://github.com/carbon-design-system/carbon/discussions/10752).

### Linting

Linting has been added via ESLint. MDX linting is also available too. In order to lint all files run:

```bash
npm run lint
```

## Building static pages

In order to build the site as static pages you can run:

```bash
npm run build
```

This creates the actual static pages of the site under the `/public` directory at the root. To actually serve these pages feel free to use a Python HTTP test server or just run:

```bash
npm run serve
```

Using the supplied `serve` command will start host the site locally at http://localhost:9000.

### Deployment

Deployment of the static content is handled via Github Actions. On a merge to the main branch a workflow is triggered that will build the static pages and then deploy them as a static site via Github Pages.

## How content is parsed

Content for the docs is stored as `.md` files in the `/content` directory. URLs for each of the files in the documentation is built as a mirror of the file structure within the directory. `README.md` files are interpreted as the index page of the directory.

In order to extend functionality the files are parsed using MDX instead of Markdown. This allows for the inclusion of JSX elements/React components if wanted. Standard Markdown syntax is still applicable but any inclusion of HTML tags should instead be using JSX tags.

> Note: any inclusion of text that may be misinterpreted as JSX could cause an error when building pages. Be sure to escape any `>`,`<`, `{`, or `}` characters in text if not used as JSX.

Various plugins to extend functionality further are available via [remark](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins) and [rehype](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins). Custom plugins can also be written through the use of the [unified](https://unifiedjs.com/learn/) family of libraries as well.

### Frontmatter data

Frontmatter data is supported out of the box with `gatsby-plugin-mdx`. For use in this site it is always optional for each document. Here are some of the values recognized:

| Value            | Type    | Optional | Description                                                                                                            |
| ---------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| `title`          | string  | ✅       | Used as SEO title as well as string is left-hand side nav. When not used will default to the `H1` tag in the document. |
| `toc`            | boolean | ✅       | Determines whether pages should show the table of contents right-hand nav. When not included defaults to `true`.       |
| `timeToComplete` | number  | ✅       | Completion time for lab. Used in the conditional render of the sub-header under the `H1` tag.                          |
| `updated`        | date    | ✅       | Date lab was last updated. Used in the conditional render of the sub-header under the `H1` tag.                        |
