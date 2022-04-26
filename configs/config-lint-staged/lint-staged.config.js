export const rootConfig = {
  '*.{ts,tsx,js,jsx,vue,md}': 'prettier --write',
}

const pkgConfig = {
  ...rootConfig,
  'src/{**/*,*}.{js,ts,jsx,tsx,vue}': 'eslint --fix',
}

export default pkgConfig
