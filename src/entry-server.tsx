import type express from 'express'
import { renderToPipeableStream } from 'react-dom/server'
import {
  AnyRouter,
  createMemoryHistory,
  RouterProvider,
} from '@tanstack/react-router'
import { createRouter } from './router'
import './fetch-polyfill'

export async function render(req: express.Request, res: express.Response) {
  const router = createRouter()

  const memoryHistory = createMemoryHistory({
    initialEntries: [req.originalUrl],
  })

  router.update({
    history: memoryHistory,
    context: {
      ...router.options.context,
    },
  })

  await router.load()

  const { pipe, abort } = renderToPipeableStream(
    <RouterProvider router={router as AnyRouter} />,
    {
      bootstrapModules: ['/src/entry-client.tsx'],
      onShellReady() {
        res.statusCode = 200
        res.setHeader('Content-type', 'text/html')
        pipe(res)
      },
      onShellError(error) {
        res.statusCode = 500
        res.send(`<!doctype html><p>An error ocurred:</p><pre>${error}</pre>`)
      },
    }
  )

  setTimeout(abort, 10_000)
}
