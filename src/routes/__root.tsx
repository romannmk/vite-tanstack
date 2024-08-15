import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import type { RouterContext } from '@/types/routerContext'

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Outlet />
      {process.env.NODE_ENV === 'development' && (
        <>
          <ReactQueryDevtools />
          <TanStackRouterDevtools />
        </>
      )}
    </>
  )
}
