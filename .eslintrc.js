module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'class-methods-use-this': ['off'],
    'consistent-return': ['off'],
    'no-underscore-dangle': [
      'error',
      { enforceInMethodNames: false, allowAfterThis: true },
    ],
  },
};
