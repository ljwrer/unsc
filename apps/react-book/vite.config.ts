import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: '@cf/react-ui',
          esModule: true,
          resolveStyle: () => {
            return `@cf/react-ui/dist/style`
          },
        },
      ],
    }),
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
})
