import { hydrateRoot } from 'react-dom/client'

import { createRouter } from './router'
import { AnyRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'

const router = createRouter()

hydrateRoot(
  document,
  <StrictMode>
    <RouterProvider router={router as AnyRouter} />
  </StrictMode>
)
