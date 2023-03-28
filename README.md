# VAD VAR Workshop Docs

Content for building experiential sales skills with various IBM products. These tutorials are hands-on labs that give you "show, not tell" experiential selling skills.

Built using:
- [Gatsby](https://www.gatsbyjs.com/docs/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [MDX](https://mdxjs.com/docs/)

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

> Note: The current version of `@carbon/react seems` to not support [TypeScript types out of the box](https://github.com/carbon-design-system/carbon/discussions/10752). 

## Building static pages

In order to build the site as static pages you can run:

```bash
npm run build
```

This creates the actual static pages of the site under the `/public` directory at the root. To actually serve these pages feel free to use a Python HTTP test server or just run:

```bash
npm run serve
```

Using the supplied `server` command should start host the site locally at http://localhost:9000.

## How content is parsed

Content for the docs is stored as `.md` files in the `/content` directory. URLs for each of the files in the documentation is built as a mirror of the file structure within the directory. `README.md` files are interpreted as the index page of the directory.

In order to extend functionality the files are parsed using MDX instead of Markdown. This allows for the inclusion of JSX elements/React components if wanted. Standard Markdown syntax is still applicable but any inclusion of HTML tags should instead be using JSX tags.

Various plugins to extend functionality further are available via [remark](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins) and [rehype](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins). Custom plugins can also be written through the use of the [unified] family of libraries as well.