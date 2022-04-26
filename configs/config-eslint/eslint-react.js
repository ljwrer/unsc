const tsconfig = require('./eslint-ts')
const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce(
  (acc, rule) => {
    acc[`jsx-a11y/${rule}`] = 'off'
    return acc
  },
  {}
)

module.exports = {
  ...tsconfig,
  extends: ['react-app', 'prettier'],
  rules: {
    ...tsconfig.rules,
    ...a11yOff,
  },
}
