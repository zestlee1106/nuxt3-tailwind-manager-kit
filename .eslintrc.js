module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'vue/script-setup-no-uses-vars': 'off',
    quotes: ['off', 'single'],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
      },
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'default'],
      },
    ],
  },
}
