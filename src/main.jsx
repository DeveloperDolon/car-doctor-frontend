import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './All_JSX/DataProvider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './All_JSX/Router/MainRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRoute}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
