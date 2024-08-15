import { createRoot } from 'react-dom/client'

import { createRouter } from './router'
import { AnyRouter, RouterProvider } from '@tanstack/react-router'

const router = createRouter()
const root = createRoot(document.getElementById('root')!)

root.render(<RouterProvider router={router as AnyRouter} />)
