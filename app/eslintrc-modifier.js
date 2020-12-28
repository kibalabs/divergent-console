module.exports = {
  extends: [
    'plugin:cypress/recommended',
  ],
  plugins: [
    'cypress',
  ],
  env: {
    'cypress/globals': true,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
