---
title: Getting Started
timeToComplete: 5
desc: Running the development environment and creating a production build locally
---

# Getting started

This page will serve as a means to get you up and running locally.

Built using:

- Next.js
- MDX
- Velite

## Prerequisites

To start the repo locally you'll need some items installed beforehand. Namely Node as well NPM.

It's recommended you use `nvm` (Node Version Manager) as this tool makes it easy to change between Node versions for various projects. You can details on the installation [here](https://github.com/nvm-sh/nvm).

However, you can also simply install Node using an [installer](https://nodejs.org/en).

> Minimum version required is Node `v18.17.0`

Once you installed Node open a terminal and verify your installation run running:

```bash
# should print your node version
node -v

# should print your npm version
npm -v
```

With both of those verified, you can continue to start the site locally.

## Starting the site locally

To start a local version of the site start by opening a terminal and navigating to the repository directory. Once inside you can run:

```bash
# this will install dependencies based on current `package-lock` file
npm ci
```

Once that's completed all you need to do is then run:

```bash
# starts the local dev server as well as watches for changes in content
npm run dev
```

And done! The development site should be available at http://localhost:3000.

## Creating production build

Currently, when building a production build our site generates a bundle of static assets to be hosted wherever we please. To do this locally simply run:

```bash
# generate static assets in the `out` folder
npm run build
```

This will generate all of the static assets in the `out` folder at the root of the project. However, to verify the build you can run:

```bash
# serves the static assets from the `out` folder
npm run serve
```

And done! The production version of the site will be available at http://localhost:3000.
