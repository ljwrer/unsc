const config = require('@cf/config-tailwind').tailwind
module.exports = {
  ...config,
  plugins: [...config.plugins, require('daisyui')],
  daisyui: {
    logs: false,
    darkTheme: 'light',
  },
}
