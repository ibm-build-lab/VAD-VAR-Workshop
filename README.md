# VAD VAR Workshop Docs

This repo contains the site code for IBM Ecosystem partner content (primarily our Value-Added Distributors and Value-Added Resellers) to build experiential sales skills with various IBM products.

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

To get up and running locally the first step is to run:

```bash
npm ci
```

After this, you can run:

```bash
npm run dev
```

This will start the development server at http://localhost:8000.

> Note: The current version of `@carbon/react` seems to not support [TypeScript types out of the box](https://github.com/carbon-design-system/carbon/discussions/10752).

### Linting

Linting has been added via ESLint. MDX linting is also available too. To lint all files run:

```bash
npm run lint
```

## Building static pages

To build the site as static pages you can run:

```bash
npm run build
```

This creates the actual static pages of the site under the `/public` directory at the root. To serve these pages feel free to use a Python HTTP test server or just run:

```bash
npm run serve
```

Using the supplied `serve` command will start hosting the site locally at http://localhost:9000.

### Deployment

Deployment of the static content is handled via GitHub Actions. On a merge to the main branch, a workflow is triggered that will build the static pages and then deploy them as a static site via GitHub Pages.

## How content is parsed

Content for the docs is stored as `.md` files in the `/content` directory. URLs for each of the files in the documentation are built as a mirror of the file structure within the directory. `README.md` files are interpreted as the index page of the directory.

To extend functionality the files are parsed using MDX instead of Markdown. This allows for the inclusion of JSX elements/React components if wanted. Standard Markdown syntax is still applicable but any inclusion of HTML tags should instead be using JSX tags.

> Note: any inclusion of text that may be misinterpreted as JSX could cause an error when building pages. Be sure to escape any `>`,`<`, `{`, or `}` characters in text if not used as JSX.

Various plugins to extend functionality further are available via [remark](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins) and [rehype](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins). Custom plugins can also be written through the use of the [unified](https://unifiedjs.com/learn/) family of libraries as well.

### Frontmatter data

Frontmatter data is supported out of the box with `gatsby-plugin-mdx`. For use in this site, it is always optional for each document. Here are some of the values recognized:

| Value            | Type    | Optional | Description                                                                                                            |
| ---------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| `title`          | string  | ✅       | Used as SEO title as well as string is left-hand side nav. When not used will default to the `H1` tag in the document. |
| `toc`            | boolean | ✅       | Determines whether pages should show the table of contents right-hand nav. When not included defaults to `true`.       |
| `timeToComplete` | number  | ✅       | Completion time for lab. Used in the conditional render of the sub-header under the `H1` tag.                          |
| `updated`        | date    | ✅       | Date lab was last updated. Used in the conditional render of the sub-header under the `H1` tag.                        |

### Localization

Localization for the content is also supported through [react-i18next](https://www.npmjs.com/package/react-i18next).

Tokens for localization are stored in the `/translations` folder as JSON files at the project root. If you'd like to localize specific content simply provide a token and consume it in the UI via the `useTranslation()` hook.

However, since the bulk of the content is written in Markdown for it to be in different languages separate files are needed for each.

If you want to declare the language of a file append a locale code to the end of the file in the form of `[filename].[locale-code].md`. This means that content in various languages live next to each other in the file system so they can easily share certain paths.

The default language that a file is assumed to be in is English. Meaning that files named like so:

- `content/test.en.md`
- `content/test.md`

Are both understood to be in English and the path would then become `/en/test` at build.

Another thing to note is that relative links for the site are localized at runtime. **They do not need to be localized per file**.

For instance, a relative link to `/foo/bar` within a Markdown file would be localized based on the current locale the user is in at runtime. If in English the link would be prepended with the proper locale as `/en/foo/bar`.

## Helpful Carbon links

- [Carbon Design System monorepo](https://github.com/carbon-design-system/carbon)
- [Carbon components storybook](https://react.carbondesignsystem.com/)
- [Icon list](https://carbondesignsystem.com/guidelines/icons/library/)
