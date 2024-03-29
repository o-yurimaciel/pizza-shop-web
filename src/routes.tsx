import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/__layouts/App'
import { AuthLayout } from './pages/__layouts/Auth'
import { Dashboard } from './pages/app/dashboard/Dashboard'
import { Orders } from './pages/app/orders/Orders'
import { SignIn } from './pages/auth/SignIn'
import { SignUp } from './pages/auth/SignUp'
import { NotFound } from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
])
