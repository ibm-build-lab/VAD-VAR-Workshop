module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'import'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: true,
      node: true
    }
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
      }
    ],
    'import/order': [
      'error',
      { groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'] }
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ]
  },
  overrides: [
    {
      files: ['*.md'],
      extends: 'plugin:mdx/recommended'
    }
  ]
};
