module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    'plugin:vue/vue3-recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-console': 'off',
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      }
    }],
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
    'indent': ['error', 2],
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-duplicates': 2,
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always'
    }],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always']
  }
};
