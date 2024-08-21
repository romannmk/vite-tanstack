import ReactDOMServer from 'react-dom/server'
import {
  AnyRouter,
  createMemoryHistory,
  RouterProvider,
} from '@tanstack/react-router'
import { createRouter } from './router'
import './fetch-polyfill'

export async function render(url: string) {
  const router = createRouter()

  const memoryHistory = createMemoryHistory({
    initialEntries: [url],
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
