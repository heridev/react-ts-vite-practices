import React from 'react'
import ReactDOM from 'react-dom/client'

import { availableRoutes } from './routes/availableRoutes.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(availableRoutes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
