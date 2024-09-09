import { defineConfig, ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { robots } from 'vite-plugin-robots'

import path from 'path'

function ssrPlugin() {
  /**
   * @type {import('vite').Plugin}
   */
  return {
    name: 'ssrPlugin',

    configureServer(server: ViteDevServer) {
      server.middlewares.use(async (req, res, next) => {
        if (!['/', '/products'].includes(req.url!)) {
          return next()
        }

        const { render } = await server.ssrLoadModule(
          path.resolve(__dirname, './src/entry-server.tsx')
        )

        return render(req, res)
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: {
      polyfill: false,
    },
    manifest: true,
    rollupOptions: {
      input: '/src/entry.client.tsx',
    },
  },
  ssr: {
    target: 'node',
  },
  appType: 'custom',
  plugins: [
    TanStackRouterVite(),
    react(),
    ssrPlugin(),
    tsconfigPaths({
      root: './',
    }),
    robots(),
  ],
})
