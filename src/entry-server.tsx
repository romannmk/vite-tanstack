import ReactDOMServer from 'react-dom/server'
import { createMemoryHistory } from '@tanstack/react-router'
import { StartServer } from '@tanstack/start/server'
import { createRouter } from './router'
import { StrictMode } from 'react'

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
    <StrictMode>
      <StartServer router={router} />
    </StrictMode>
  )

  return { html }
}
