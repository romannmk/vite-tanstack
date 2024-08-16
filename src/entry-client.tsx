import { createRoot } from 'react-dom/client'

import { createRouter } from './router'
import { AnyRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'

const router = createRouter()
const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <RouterProvider router={router as AnyRouter} />
  </StrictMode>
)
