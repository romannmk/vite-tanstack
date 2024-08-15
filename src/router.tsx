import { createRouter as createReactRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'
import {
  dehydrate,
  hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactNode } from 'react'

const queryClient = new QueryClient()

export function createRouter() {
  return createReactRouter({
    routeTree,
    context: {
      queryClient,
    },
    dehydrate: () => {
      return {
        queryClientState: dehydrate(queryClient),
      }
    },
    hydrate: (dehydrated) => {
      hydrate(queryClient, dehydrated.queryClientState)
    },
    defaultPreload: 'intent',
    Wrap: ({ children }: { children: ReactNode }) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      )
    },
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}