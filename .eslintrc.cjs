module.exports = {
    root: true,
    extends: [
        '@nuxt/eslint-config',
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'no-console': 'off',
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 1
            },
            "multiline": {
                "max": 1
            }
        }]
    }
}