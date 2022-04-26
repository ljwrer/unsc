import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import path from 'path'
import autoExternal from 'rollup-plugin-auto-external'

export class ViteConfig {
  genConfig() {
    const plugins = this.genPlugins()
    const rollupOptions = this.genRollupOptions()
    return defineConfig({
      build: {
        target: 'esnext',
        lib: {
          entry: path.resolve(process.cwd(), 'src'),
          formats: ['es'],
          fileName: () => 'index.js',
        },
        minify: false,
        rollupOptions,
      },
      plugins,
    })
  }

  genPlugins() {
    return [
      dts({
        entryRoot: './src',
      }),
    ]
  }

  genRollupOptions() {
    return {
      plugins: [autoExternal()],
    }
  }
}
