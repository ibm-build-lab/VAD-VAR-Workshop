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
    'prettier/prettier': 'error'
  }
};
