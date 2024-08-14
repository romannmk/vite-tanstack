import { createRoot } from 'react-dom/client'

import { StartClient } from '@tanstack/start'
import { createRouter } from './router'

const router = createRouter()
const root = createRoot(document.getElementById('root')!)

root.render(<StartClient router={router} />)