---
timeToComplete: 5
title: Test Page
updated: 2023-04-06
---

# Content Formatting

Below are various examples to show how Markdown content will be displayed on a page. This page is mostly a means to test content formatting and custom UI elements but does also contain some explanations as to how some of the content formatting is handled as well.

## Standard Markdown Formatting

Here's a list of how some standard Markdown syntax will format:

- _Italicized text_
- **Bold text**
- <u>Underlined text</u>

An ordered list with some nesting:

1. One
   - Nested item
     - Nest again
2. Two
3. Three

## Custom Elements

Given we use MDX as a means to parse our Markdown content this means we can insert JSX elements directly into our content. Below are some examples of the custom elements implemented.

### Quiz Alert

This component is used as a means to denote a certain section of the content may be on a quiz. Use of this component is easy as it requires no props but does allow a `text` string to customize the message.

Example use:

`<QuizAlert text='This will be on the quiz' />`

<QuizAlert text='This will be on the quiz' />

### Warning

Same usage as the `Quiz Alert` component.

`<Warning text='This is a warning' />{:jsx}`

<Warning text='This is a warning' />

### Danger

Same usage as the `Quiz Alert` component.

`<Danger text='Callout something very important' />`

<Danger text='Callout something very important' />


### Sub-header

This component is inserted at the top of every page under the `H1` tag at build-time.
It's content is based off of frontmatter data that exist in the document and thus should not be inserted manually into a document.

Example use:

`<SubHeader timeToComplete={2} updated='2023-04-10'/>`

<SubHeader timeToComplete={2} updated='2023-04-10'/>

## Code Blocks

Below are some examples of how code blocks may look either in-line or multi-line.
Syntax highlighting is handled via [rehype-pretty-code](https://rehype-pretty-code.netlify.app/). Rather than using a pre-built theme, the theme is instead created at build time via the `create-theme` script at the project root that makes use of the `@carbon/colors` package for color tokens.

### Inline code

This is some standard `inline code` than can exist.

### Code Blocks

Here's an example of `js`:

```js
const test = 'Foo Bar';

const split = test.split(' ');

console.log(split);
```

Here's an example of the `c++`:

```cpp
#include <std.io>

using namespace::std;

int main() {
  cout << "Hello world!" << endl;
}
```

Here's an example of some `bash`:

```bash
ls -R

chmod +X test.sh

echo 'This is a test'
```

Really long inline code:

`https://www.ibm.com/products/watson-assistant/demos/lendyr/demo.html?integrationID=ID_HERE&region=REGION_HERE&serviceInstanceID=ID_HERE`

Here's an example of some really long code in `json`:

```json
"scripts": {
  "build": "lerna run build --stream --prefix --npm-client yarn",
  "ci-check": "carbon-cli ci-check",
  "clean": "lerna run clean && lerna clean --yes && rimraf node_modules",
  "doctoc": "doctoc --title '## Table of Contents'",
  "format": "prettier --write '**/*.{js,md,scss,ts}' '!**/{build,es,lib,storybook,ts,umd}/**'",
  "format:diff": "prettier --list-different '**/*.{js,md,scss,ts}' '!**/{build,es,lib,storybook,ts,umd}/**' '!packages/components/**'",
  "lint": "eslint actions config codemods packages",
  "lint:styles": "stylelint '**/*.{css,scss}' --report-needless-disables --report-invalid-scope-disables",
  "sync": "carbon-cli sync",
  "test": "cross-env BABEL_ENV=test jest",
  "test:e2e": "cross-env BABEL_ENV=test jest --testPathPattern=e2e --testPathIgnorePatterns='examples,/packages/components/,/packages/react/'"
},
"resolutions": {
  "react": "~16.9.0",
  "react-dom": "~16.9.0",
  "react-is": "~16.9.0",
  "react-test-renderer": "~16.9.0"
},
"devDependencies": {
  "@babel/core": "^7.10.0",
  "@babel/plugin-proposal-class-properties": "^7.7.4",
  "@babel/plugin-proposal-export-default-from": "^7.7.4",
  "@babel/plugin-proposal-export-namespace-from": "^7.7.4",
  "@babel/plugin-transform-runtime": "^7.10.0",
  "@babel/preset-env": "^7.10.0",
  "@babel/preset-react": "^7.10.0",
  "@babel/runtime": "^7.10.0",
  "@commitlint/cli": "^8.3.5",
}
```

## Some Text

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim blandit volutpat maecenas volutpat blandit aliquam. Placerat in egestas erat imperdiet sed euismod nisi porta. Cursus turpis massa tincidunt dui ut ornare lectus sit. Vel pharetra vel turpis nunc eget. Tortor dignissim convallis aenean et tortor at risus viverra. Sit amet mattis vulputate enim nulla. Massa tincidunt dui ut ornare lectus sit amet est placerat. Habitasse platea dictumst vestibulum rhoncus. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Eu volutpat odio facilisis mauris sit. Ornare suspendisse sed nisi lacus sed viverra tellus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.

> An example of a of block quote

Convallis convallis tellus id interdum velit laoreet id donec ultrices. Enim diam vulputate ut pharetra sit. Augue lacus viverra vitae congue eu consequat ac felis donec. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Ut eu sem integer vitae justo eget magna. Nunc sed blandit libero volutpat sed. Convallis aenean et tortor at risus viverra adipiscing. Enim facilisis gravida neque convallis a cras. Ornare arcu dui vivamus arcu. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Neque aliquam vestibulum morbi blandit cursus risus at. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. A diam maecenas sed enim ut. Lacus vestibulum sed arcu non odio euismod lacinia at quis.

Sed nisi lacus sed viverra. Volutpat est velit egestas dui id ornare arcu odio ut. Neque viverra justo nec ultrices dui sapien eget mi. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Vivamus arcu felis bibendum ut tristique. Adipiscing at in tellus integer feugiat scelerisque. Vitae tempus quam pellentesque nec nam aliquam sem et. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.


> This is an example of a multiline blockquote
>
> This is the second line of the **blockquote**
