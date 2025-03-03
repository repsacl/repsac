import { Link } from "react-router-dom"

import InteractiveLink from "./InteractiveLink"

function NavBar() {

  return (
    <>
        <nav className="flex items-center justify-between w-full p-2 border-b bg-rgb(240, 240, 240)">

            <Link to={"/"} className="justify-start bg-gray-100 rounded-xl">
                <img src="/LB_Logo.svg" alt="Logo" className="md:h-14 h-9 cursor-pointer m-0 transition-all ease-in hover:p-0.5" />
            </Link>

            <ul className="flex md:space-x-6 space-x-4 md:text-xl text-sm font-medium md:px-6 px-1">
                <li><InteractiveLink to="/">Hjem</InteractiveLink></li>
                <li><InteractiveLink to="/om">Om</InteractiveLink></li>
                <li><InteractiveLink to="/kontakt">Kontakt</InteractiveLink></li>
            </ul>
        </nav>

    </>
  )
}

export default NavBar
