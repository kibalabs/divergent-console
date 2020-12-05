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
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'object-curly-newline': ['error', { ImportDeclaration: 'never' }],
    'react/destructuring-assignment': ['error', 'never'],
    'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/jsx-one-expression-per-line': [0],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
  },
};
