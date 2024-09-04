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

  let shellRendered = false

  const { pipe } = renderToPipeableStream(
    <RouterProvider router={router as AnyRouter} />,
    {
      bootstrapModules: ['/src/entry-client.tsx'],
      onShellReady() {
        shellRendered = true
        res.statusCode = 200
        res.setHeader('Content-type', 'text/html')
        pipe(res)
      },
      onShellError(error) {
        res.statusCode = 500
        res.send(`<!doctype html><p>An error ocurred:</p><pre>${error}</pre>`)
      },
      onError(error: unknown) {
        res.statusCode = 500
        // Log streaming rendering errors from inside the shell.  Don't log
        // errors encountered during initial shell rendering since they'll
        // reject and get logged in handleDocumentRequest.
        if (shellRendered) {
          console.error(error)
        }
      },
    }
  )
}
