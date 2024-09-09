import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import type { RouterContext } from '@/types/routerContext'

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <html>
      <head
        dangerouslySetInnerHTML={{
          __html: `
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/src/index.css" />
            <title>Vite App</title>
            <script type="module">
              import RefreshRuntime from "/@react-refresh"
              RefreshRuntime.injectIntoGlobalHook(window)
              window.$RefreshReg$ = () => {}
              window.$RefreshSig$ = () => (type) => type
              window.__vite_plugin_react_preamble_installed__ = true
            </script>
          `,
        }}
      ></head>
      <body>
        <Outlet />
      </body>
    </html>
  )
}
