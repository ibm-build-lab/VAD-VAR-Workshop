module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
***REMOVED***
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
***REMOVED***
  },
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.tsx'] }],
    'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']
  ***REMOVED***
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
  ***REMOVED***
    ]
  },
  overrides: [
    {
      files: ['*.md'],
      extends: 'plugin:mdx/recommended'
***REMOVED***
  ]
};
