import { useState } from 'react'
import { Link } from "react-router-dom"

import '../App.css'

function SignUp() {

  return (
    <>
        <h1 className="text-5xl text-center m-10">Sign Up</h1>

        <div>
      {/* <form onSubmit={handleSignUp} className="max-w-md m-auto pt-24"> */}
      <form className="max-w-md m-auto pt-24 shadow-lg rounded-lg bg-neutral-800 ">
        <h2 className="font-bold pb-2">Sign up today!</h2>
        <p>
          Already have an account? <Link to="/">Sign in</Link>
        </p>
        <div className="flex flex-col py-4">
          <input
            // onChange={(e) => setEmail(e.target.value)}
            className="p-3 mt-2"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col py-4">
          <input
            // onChange={(e) => setPassword(e.target.value)}
            className="p-3 mt-2"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        {/* <button type="submit" disabled={loading} className="w-full mt-4">
          Sign Up
        </button> */}
        <button type="submit" className="w-full mt-4">
          Sign Up
        </button>
      </form>
    </div>
    </>
  )
}

export default SignUp
