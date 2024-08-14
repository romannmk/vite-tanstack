import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start'
import type { RouterContext } from '@/types/routerContext'

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <Html lang="en">
      <Head>
        <Meta />
      </Head>
      <Body>
        <Outlet />
        {process.env.NODE_ENV === 'development' && (
          <>
            <ReactQueryDevtools />
            <TanStackRouterDevtools />
          </>
        )}
        <Scripts />
      </Body>
    </Html>
  )
}
