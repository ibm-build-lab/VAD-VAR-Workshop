---
title: 'Styling'
updated: 2024-03-15
desc: How theming and styling works within the site
timeToComplete: 10
---

# Styling

Styling for the site is handled via Sass `scss` syntax. This is a superset of normal CSS but with the addition of various useful functions.

All theming is handled via the `@carbon/react` dependency. This package includes references to the various other styling modules within Carbon like:

`@carbon/react` is used within the `global.scss` stylesheet. This applies theming to all Carbon components and HTML elements.

## Sass Namespaces

All `.module.scss` files are prepended with access to various Carbon styling modules (see `next.config.mjs` to see how). They are seperated into different namespaces to delineate their point of origin.

Below we'll explore how each module can be accessed.

## Accessing theme tokens

Themed color tokens are accessible via the `themes` namespace through the `@carbon/theme` module. These tokens are powerful as they allow for colors to be applied that are **theme-neutral**. This makes styling new elements easy as they will conform to both Light and Dark themes out-of-the-box and is the preferred way to specify all color attributes for elements.

To get a specific color simply use `theme.$[token-name]` like so:

```scss
$color: themes.$layout-02;
```

For getting a single color this is the easiest and best approach. However, in more complicated scenarios where you may need to change the opacity or interpolate the token name with a string, there is a separate approach.

### Caveats

The `theme.$[token-name]` method is not the only way to get a token. There exists a function within Carbon called `themes.get($token)`. This function, however, does not return theme-agnostic tokens and instead returns static tokens relative to the module's configured theme. Because of this it has been hidden and is not accessible via the `themes` namespace.

Instead, a new function has been appended to the namespace called `theme.get-token($token, $opacity)`.

This function is useful when you need to use a string to access a token (for instance when interpolating a value). It is built off of some the internal functions within the module as well and will error when a token that does not exist is referenced.

It also allows you to specify an optional desired `$opacity` value. This is needed as the function is designed to return a CSS variable and augmenting the opacity of such can be awkward. Under the hood, it applies `color-mix` to the token.

Let's take a look at the function in action:

```scss
$level: 02;
$color: themes.get_token('layer-#{$some}', 0.5);
```

**Further documentation:**

- A full list of the exported tokens can be found [here](https://github.com/carbon-design-system/carbon/blob/main/packages/themes/docs/sass.md#api).
- NPM [documentation](https://www.npmjs.com/package/@carbon/themes).
- Carbon's [documentation on the matter](https://carbondesignsystem.com/elements/themes/overview/).

## Accessing color tokens

If you need access to a specific color within Carbon these are available via the `colors` namespace through `@carbon/colors`.

For example, say you needed a specific blue value for some text:

```scss
.element {
  background: colors.$blue-60;
}
```

Or if you wanted the background of that element to be a lighter blue

```scss
$color: blue;

.element {
  // map-deep-get is a helper exported from our `resources` namespace
  border: 1px solid resources.map-deep-get(colors.$colors, $color, 60);
  color: resources.map-deep-get(colors.$colors, $color, 10);
}
```

**Further documentation:**

- A full list of the exported tokens can be found [here](https://github.com/carbon-design-system/carbon/blob/main/packages/colors/docs/sass.md).
- NPM [documentation](https://www.npmjs.com/package/@carbon/colors).
- Carbon's [documentation on the matter](https://carbondesignsystem.com/elements/color/overview/).

## Accessing layout tokens

Layout tokens are useful for defined spacing and are available in the `layout` namespace via `@carbon/layout`.

For instance, if you wanted to define the padding of a component:

```scss
.element {
  padding: layout.$spacing-05;
}
```

**Further documentation:**

- A full list of the exported tokens can be found [here](https://github.com/carbon-design-system/carbon/blob/main/packages/layout/docs/sass.md).
- NPM [documentation](https://www.npmjs.com/package/@carbon/layout).
- Carbon's [documentation on the matter](https://carbondesignsystem.com/elements/spacing/overview/).

## Accessing typography tokens

Items related to typography are exported via the `type` namespace and provided via `@carbon/type`. This includes various tokens, functions, and mixins related to font styling.

For instance, if you wanted to style a piece of text:

```scss
.element {
  & > p {
    @include type.type-style('heading-07');
    // maybe with some override afterward
    font-weight: bold;
  }
}
```

If the typeset was instead fluid and depended on page width you would instead do:

```scss
.element {
  & > p {
    @include type.type-style('fluid-heading-06', true);
    // maybe with some override afterward
    font-weight: bold;
  }
}
```

**Further documentation:**

- A full list of the exported tokens can be found [here](https://github.com/carbon-design-system/carbon/blob/main/packages/type/docs/sass.md#api).
- NPM [documentation](https://www.npmjs.com/package/@carbon/type).
- Carbon's [documentation on the matter](https://carbondesignsystem.com/elements/typography/overview).

## Accessing the custom namespace

Also provided is access to the `resources` namespace. This is provided via `src/styles/_resources.scss` within the project. This namespace provides access to various useful tokens, functions, mixins, .etc.

For instance, one of the exported mixins useful for styling at various screen sizes can be used like so:

```scss
.element {
  display: flex;
  background-color: red;

  // this will hide the element at screen widths smaller than the md breakpoint
  @include resources.apply-lesser-than('md') {
    display: none;
  }

  // this will augment the background color at screen widths larger than the lg breakpoint
  @include resources.apply-greater-than('lg') {
    background-color: blue;
  }
}
```

## How the theme switch works

Carbon works by applying theming based on the existence of specific classes. Carbon exports a `Theme` component but in reality that's only a wrapper that applies a specific class.

Theme switch is implemented via `next-themes`` and will append the needed class to the body element of the page. It is also automatically configured to remember theme selection and, on the first visit, default to the system theme.
