module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  // <https://github.com/storybookjs/storybook/issues/10887#issuecomment-901109891>
  async viteFinal(config, { configType }) {
    config.resolve.dedupe = ['@storybook/client-api']
    return config
  },
}
