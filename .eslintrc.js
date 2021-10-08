const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

module.exports = {
  rules: {
    '@typescript-eslint/no-useless-constructor': RULES.OFF,
    '@typescript-eslint/no-unused-vars': RULES.WARN
  }
}
