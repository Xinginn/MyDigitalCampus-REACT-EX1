import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import AppLayout from './components/AppLayout'

import Kanban from './views/Kanban'
import App from './App'

const router = createBrowserRouter([

  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <App/>
      },
      {
        path: '/kanban',
        element: <Kanban/>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
