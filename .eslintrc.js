module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'comma-dangle': ['error', 'always-multiline'],
  },
}
