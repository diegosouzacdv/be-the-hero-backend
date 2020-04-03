module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier', 'react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    "prettier/prettier": "error",
    //"linebreak-style": ["error", "windows"],
    "no-param-reassing": "off",
    "class-methods-use-this": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
  },
};
