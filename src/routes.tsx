import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/__layouts/App'
import { AuthLayout } from './pages/__layouts/Auth'
import { Dashboard } from './pages/app/Dashboard'
import { SignIn } from './pages/auth/SignIn'
import { SignUp } from './pages/auth/SignUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
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
