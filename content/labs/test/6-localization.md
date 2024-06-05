---
desc: How localization is handled in Next.js
updated: 2024-03-17
timeToComplete: 10
---

# Localization

Localization logic for the site is handled via [`next-intl`](https://next-intl-docs.vercel.app/).

Because this site is designed to build static assets some special care has been taken to use the proper methods from `next-intl`. Here's some important documentation on the topic:

If this site is to be changed to be hosted with a server instead you can forgo the use of the `unstable` functions and may use middleware instead.

## Static routes

As stated [elsewhere](/docs/content-sourcing#localization), translations for long-form content are stored as separate files alongside each other. Each file is then transformed into a static page with a locale prefixed.

This is handled within the `src/app` directory with routes for `[locale]` and `[..slug]`.

Documentation:

- https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering

## UI messages

Smaller items that exist within the UI are localized as well. These are defined in the various JSON files within the `messages` directory. When creating a new component that needs some short text you can add your localizations in each of those files.

There are some nuances in how these messages are consumed within server and client components in Next.js. Here is some documentation on the subject:

- https://next-intl-docs.vercel.app/docs/environments/server-client-components
