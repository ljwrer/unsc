import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { ViteConfig } from './ViteConfig.js'

export class VueViteConfig extends ViteConfig {
  genPlugins() {
    return [...super.genPlugins(), vue(), vueJsx()]
  }
}
