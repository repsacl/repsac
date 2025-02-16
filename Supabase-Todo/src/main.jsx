import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import App from './Pages/App.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import Nopage from './Pages/NoPage.jsx'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

import './index.css'

function Layout() {
  return (
    <>
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Nopage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
