
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './All_JSX/DataProvider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './All_JSX/Router/MainRoute'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={MainRoute}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
