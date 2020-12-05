module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    'max-len': 'off',
    'import/prefer-default-export': 'off',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'lines-between-class-members': 'off',
    'object-curly-newline': ['error', { ImportDeclaration: 'never' }],
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
  },
};
