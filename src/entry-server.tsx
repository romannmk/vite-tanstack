import ReactDOMServer from 'react-dom/server'
import {
  AnyRouter,
  createMemoryHistory,
  RouterProvider,
} from '@tanstack/react-router'
import { createRouter } from './router'

type Opts = {
  url: string
}

export async function render(opts: Opts) {
  const router = createRouter()

  const memoryHistory = createMemoryHistory({
    initialEntries: [opts.url],
  })

  router.update({
    history: memoryHistory,
    context: {
      ...router.options.context,
    },
  })

  await router.load()

  const html = ReactDOMServer.renderToString(
    <RouterProvider router={router as AnyRouter} />
  )

  return { html }
}
