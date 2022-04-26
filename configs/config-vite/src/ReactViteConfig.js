import { ViteConfig } from './ViteConfig.js'
import react from '@vitejs/plugin-react'

export class ReactViteConfig extends ViteConfig {
  genPlugins() {
    return [...super.genPlugins(), react()]
  }
  genRollupOptions() {
    return {
      ...super.genRollupOptions(),
      external: ['react/jsx-runtime'],
    }
  }
}
