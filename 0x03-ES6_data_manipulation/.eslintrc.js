module.exports = {
    env: {
      browser: false,
      es2021: true,
      jest: true,
    },
    extends: ['airbnb-base', 'plugin:jest/recommended'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
      'no-var': 'error',
      'prefer-const': 'error',
    },
  };
  