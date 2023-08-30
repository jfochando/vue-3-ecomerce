/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

// module.exports = {
//   root: true,
//   'parser': 'vue-eslint-parser',
//   'extends': [
//     'plugin:vue/base',
//     'plugin:vue/vue3-essential',
//     'eslint:recommended',
//     '@vue/eslint-config-typescript'
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest'
//   }
// }

module.exports = {
  plugins: ['@typescript-eslint'],
  // Prerequisite `eslint-plugin-vue`, being extended, sets
  // root property `parser` to `'vue-eslint-parser'`, which, for code parsing,
  // in turn delegates to the parser, specified in `parserOptions.parser`:
  // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
      // does not work with type definitions
      'no-unused-vars': 'off',
    }
  }]
}