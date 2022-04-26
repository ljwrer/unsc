import { ViteConfig } from './src/ViteConfig.js'
import { ReactViteConfig } from './src/ReactViteConfig.js'
import { VueViteConfig } from './src/VueViteConfig.js'

export const libViteConfig = new ViteConfig().genConfig()
export const reactViteConfig = new ReactViteConfig().genConfig()
export const vueViteConfig = new VueViteConfig().genConfig()
