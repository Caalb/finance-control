module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'no-console': 'off',
    'vue/multi-word-component-names': 0,
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1
      },
      "multiline": {
        "max": 1
      }
    }],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    "indent": ["error", 2]
  }
}