---
title: Writing content
updated: 2024-03-14
timeToComplete: 5
desc: How to write content in MDX as well as some tips and tricks when thinking about localizing content
---

# Writing Content

As stated elsewhere, the content for this site is written in MDX. This is a superset of Markdown syntax. Specifically it allows for the inlining of JSX within otherwise static Markdown.

If you are new to Markdown I reccomend reading GitHub's [documentation on the matter](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

## Your editor

It is recommended your editor of choice when writing content be [Visual Studio Code](https://code.visualstudio.com/). This is due to the fact that VS Code has superb integration with the various community extensions for content linting. The follow extensions are the bare minumimum reccomended:

- [ESLint](vscode:extension/dbaeumer.vscode-eslint): Shows linting errors within the editor
- [Prettier](vscode:extension/esbenp.prettier-vscode): Ties into ESLint
- [MDX](vscode:extension/unifiedjs.vscode-mdx): Extended Markdown sytnax supporting JSX

Others that are not hard requirements but you may find useful include:

- [Grammarly](vscode:extension/znck.grammarly): Because we all make spelling mistakes
- [MDX Preview](vscode:extension/xyc.vscode-mdx-preview): Preview content rendering in the editor

Of course there are other editors. But if you do choose to use a different one I'd reccomend it have the ability to easily tie into ESLint and Prettier so that linting rules are more easily visible when writing/editing content.

## File metadata

Contained within each MDX file you might see it prefixed with a small amount of YAML. This is called **frontmatter data** and is utilized later down the line in various ways. Currently supported values within the `content` folder include:

| Name             | Type      | Description                                             |
| ---------------- | --------- | ------------------------------------------------------- |
| `title`          | `string`  | Used as title with side navigation                      |
| `desc`           | `string`  | Short description of page                               |
| `updated`        | `date`    | Date last updated. Sourced in page headers              |
| `toc`            | `boolean` | Whether to render table of contents for page            |
| `level`          | `string`  | Tags a page with level item in the header when rendered |
| `timeToComplete` | `number`  | Time needed to complete page                            |

> All of these fields **_are optional_**.

These values are also verifed both by the linter (via `remark-lint-frontmatter-schema`) and by `velite` (via `zod`).

## Linting

Like any form of code MDX content can also be linted to ensure uniformity. As such a simple set of rules via ESLint, Prettier, and Remark has been added to instrument this.

The configuation files tied to the linting of content files are found in both `.eslintrc.mjs` and `.remarkrc.mjs` at the root of the project.

If your editor is properly configured with the ESLint and Prettier extensions mentioned above you should be able to see any linting error directly in the editor as well as in the `Problems` tab if you are using VS Code.

If they are not displaying you can also check for errors by running the following commands:

```bash
# lints all mdx files within the project
npm run lint:md

# to lint one specific file
eslint ./specific/file.md

# or if the command alias is not configured
./node_modules/eslint/bin/eslint.js ./specific/file.md
```

## Localization

Our content is written to support both English and Spanish translations. In order to ease some problems that might arise our site is designed to have different locales for the same content live next to each other within the projects file system.

As such, when the actual site pages are built they are always prefixed with a locale.

### Filename conventions

Locales are specified within the file name of each page in the form of `[name].[locale].md`. If a file name does not specify a locale it is assumed to be in English with a locale of `en`.

Here's a small table illustrating the concept:

| File name    | Locale |
| ------------ | ------ |
| `test.md`    | `en`   |
| `test.es.md` | `es`   |

<Warning>
Because of how locales are parsed from the filename **DO NOT** use periods (`.`) within the file name other than to specify the locale.
</Warning>

### Relative URLs

Given translation of content can be automated having to manually change the locales of relative links would be quite tedious. In order to remedy this relative links should instead be agnostic to the locale.

For instance, if you want to specify a relative link to `/en/docs/writing-content` instead use `/docs/writing-content` as your link. Then when the actual page is built this link will then be prepended with whatever the locale of the original file was.

If the file name the relative link was in was `writing-content.md` the link would become `/en/docs/writing-content`. If the file name was instead `writing-content.es.md` then the link would become `/es/docs/writing-content`.

<Danger>
Any relative link **must be referenced from the site's root**. This is a current limitation.
</Danger>

Here's a small table illustrating the concept:

| File name    | Relative link URL | Generated URL   |
| ------------ | ----------------- | --------------- |
| `test.md`    | `/docs/item`      | `/en/docs/item` |
| `test.es.md` | `/docs/item`      | `/es/docs/item` |

<Warning>
Currently, relative links should be written relative to the root of the site. So a relative URL should start with a slash (`/`).

If the page your link was in was `/docs/page-one` and you wanted to navigate to `/docs/page-two` using `page-two`as the `href` value it would not work.
</Warning>
