import { useState } from 'react'
import { Link } from "react-router-dom"

import '../App.css'

function Login() {

  return (
    <>
      <div className="bg-cover bg-center bg-fixed">
        <div className="h-screen flex justify-center items-center">
          <div className="bg-neutral-900 mx-4 p-8 rounded shadow-xl w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
            <form>
              <div className="mb-4">
                <label className="block font-semibold text-gray-400 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                  id="email" type="email" placeholder="Enter your email address" />
              </div>
              <div className="mb-4">
                <label className="block font-semibold text-gray-400 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password" type="password" placeholder="Enter your password" />
                <Link className="text-gray-500 hover:text-gray-800" to="/">Forgot password?</Link>
              </div>
              <div className="mb-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
