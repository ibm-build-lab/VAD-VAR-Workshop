---
title: Content Data Layer
updated: 2024-03-14
timeToComplete: 10
desc: How a data layer is created between the site code and the content itself. This allows for a more predictable and type-safe DX.
---

# Content Sourcing

This page will deal with how the data layer between our content and Next.js is created.

All page content for the site is sourced from within the `content` directory at the root level of the repository. For this large amount of content to be sourced within Next.js in a type-safe and easy-to-consume manner we've opted to make use of a tool called [Velite](https://velite.js.org/).

Velite helps to bridge the gap between our content and site code by allowing us to define a schema that our content follows. This means that when it is ingested within the site code typing will be provided based on the schema provided. Here's a high-level diagram of the process provided by Velite:

![how it works](https://velite.js.org/assets/flow.svg)

To see the definition of the schema take a look at `velite.config.js` at the project root.

Velite works by taking content from the defined sources in the config file and generating a manifest within the `.velite` directory for each of the collections we define.

Under the hood, this directory is both created and updated when you run either `npm run dev` or `npm run build`.

If you want to manually update it you can run:

```bash
# generates the .velite directory once
npm run velite

# watches for changes and updates as needed
npm run velite:watch
```

This tool is also extremely useful when developing due to the content manifests being continually updated as content is changed which means that HMR is supported implicitly.

So as you write content locally the site page will update automatically when running the development server.

## How page URLs are generated

During this sourcing phase, the actual site URLs are generated as well and appended as part of the manifest. They are based on the original file paths of the MDX content.

These URL slugs are generated in the `transform` function in the Velite config.

Here are some examples:

| Original file path                    | Result page path        |
| ------------------------------------- | ----------------------- |
| `/content/docs/README.md`             | `/en/docs`              |
| `/content/docs/carbon.md`             | `/en/docs/carbon`       |
| `/contentWatsonx/WatsonxAI/README.md` | `/en/watsonx/watsonxai` |

> Notice in the example above how any `README.md` file is interpreted as the index route for that directory.

### Localization

By default, our content is assumed to be in English with a locale of `en` (as seen in the table above).

However, we also want support for Spanish translations as well. And, since most of the time localized content will reference the same images it makes sense to have the Markdown files live next to each other in the file system. As such, in order to specify the locale for a page name the file as such:

`[page-name].[locale].md`

Here are some examples:

| Original file path                       | Result page path        |
| ---------------------------------------- | ----------------------- |
| `/content/docs/README.es.md`             | `/es/docs`              |
| `/content/docs/carbon.es.md`             | `/es/docs/carbon`       |
| `/contentWatsonx/WatsonxAI/README.es.md` | `/es/watsonx/watsonxai` |

<Danger>
As a note. When naming files refrain from using periods (`.`) outside of specifying the locale.

Currently, a file name like `test.file.md` would have its locale parsed as `file`. Which is wrong.
</Danger>
