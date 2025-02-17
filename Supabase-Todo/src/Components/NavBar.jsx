import { Link } from "react-router-dom"

import BTN from './Button'

function NavBar() {

  return (
    <>
        <nav className="flex items-center justify-between w-full p-4 border-b bg-rgb(240, 240, 240)">

            <div className="text-gray-500 text-sm">TODO</div>

            <Link to={"/"} className="absolute left-1/2 transform -translate-x-1/2">LOGO</Link>

            <ul className="flex md:space-x-6 space-x-4 md:text-lg text-sm font-medium md:px-6 px-1">
                <Link to="/login"><BTN className={"bg-blue-700 border-blue-700 hover:bg-transparent"}>LOGIN</BTN></Link>
                <Link to="/signup"><BTN className={"hover:bg-blue-700 border-blue-700"}>SIGNUP</BTN></Link>
            </ul>
        </nav>

    </>
  )
}

export default NavBar
