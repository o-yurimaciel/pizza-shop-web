import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/__layouts/App'
import { AuthLayout } from './pages/__layouts/Auth'
import { Dashboard } from './pages/app/Dashboard'
import { SignIn } from './pages/auth/SignIn'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <SignIn />,
      },
    ],
  },
])
