module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ['prettier'],
  ignorePatterns: ['*.spec.*'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/no-anonymous-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
}
