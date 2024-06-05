// const { getGlobals } = require('eslint-plugin-mdx/lib/helpers');

// const shortcodes = require('./src/lib/mdx/shortcodes.ts');
// const shortcodes = { TileGrid: null, NavTile: null };

/** @type { import('eslint').Linter.Config }  */
module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['prettier'],
  rules: {
    // indent: ['error', 2, { SwitchCase: 1, offsetTernaryExpressions: false }],
    indent: 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'spaced-comment': ['error', 'always'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.tsx'] }],
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/self-closing-comp': ['error', { component: true, html: false }],
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'no-unused-vars': [
      'error',
      { destructuredArrayIgnorePattern: '^_', argsIgnorePattern: '^_' }
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      // requires so eslint can know what JSX is valid
      // globals: getGlobals(shortcodes),
      rules: {
        indent: ['off'],
        // 'react/jsx-no-undef': [1, { allowGlobals: true }],
        'react/jsx-no-undef': 'off',
        'react/no-unescaped-entities': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.md', '.mdx'] }]
      },
      extends: 'plugin:mdx/recommended',
      settings: { 'mdx/remark': true }
    }
  ]
};
