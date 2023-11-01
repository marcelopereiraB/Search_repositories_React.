module.exports = {
  env: {
    browser: true,

    es2021: true,

    node: true,
  },

  extends: [
    'eslint:recommended',

    'plugin:react/recommended',

    'plugin:prettier/recommended',

    'plugin:react/jsx-runtime',

    'plugin:@typescript-eslint/recommended',
  ],

  overrides: [],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',

    sourceType: 'module',

    ecmaFeatures: {
      jsx: 'true',
    },
  },

  plugins: ['react', '@typescript-eslint'],

  rules: {
    'no-unused-vars': 1,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
