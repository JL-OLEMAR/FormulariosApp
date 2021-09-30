const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

module.exports = {
  parser: './tsconfig.json',
  extends: ['./node_modules/ts-standard/eslintrc.json'],
  ignorePatterns: [
    'node_modules/**',
    'dist/**'
  ],
  rules: {
    '@typescript-eslint/no-useless-constructor': RULES.OFF,
    '@typescript-eslint/no-unused-vars': RULES.WARN
  }
}
