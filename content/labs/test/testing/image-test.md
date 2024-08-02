---
title: Image
updated: 2024-03-17
desc: Small example of custom image component
timeToComplete: 2
---

# Image

Image syntax can be used in GitHub-flavored Markdown like so:

```md
![My Terminal](../testing/images/screenshot.png)
```

This code results in an image displaying like so:

![My Terminal](../testing/images/screenshot.png)

## Implementation

Images can be stored within the `content` directory like any other form of content. However, because of how Next.js handles static assets when they are referenced as relative paths within an `Image` component they are assumed to be within the `public` directory.

To _"cheat"_ this limitation, when running a development instance of the server a symlink is created within the `public` directory to point to the top-level content folder. This bridges the gap and allows relative paths to be used in the Markdown content.

Then when building out static assets this symlink is removed to decrease the size of the total assets. This is fine as a custom image loader has also been added so that relative image links are transformed to point to their remote counterparts in the GitHub repository.

> For more info on this check the `images` configuration in `next.config.mjs` as well as the loader logic itself in `./src/lib/image-loader.ts`.

Both the creation and deletion of the symlinks are instrumented as some simple Node scripts (`create_symlink.mjs` and `remove_symlink.mjs`) contained within the top-level `bin` folder. They are run as the first steps of `npm run dev` and `npm run build` respectively.

<Warning>
This implementation assumes that images in production will be served from a GitHub repository.

If you use some other method be sure to remove the plugin from the MDX pipeline and implement your logic.
</Warning>
