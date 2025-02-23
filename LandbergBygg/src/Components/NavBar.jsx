import { Link } from "react-router-dom"

import InteractiveLink from "./InteractiveLink"

function NavBar() {

  return (
    <>
        <nav className="flex items-center justify-between w-full p-4 border-b bg-rgb(240, 240, 240)">

            <div className="text-gray-500 text-sm">Bygg</div>

            <Link to={"/"} className="absolute left-1/2 transform -translate-x-1/2">
                <img src="/src/assets/LB_Logo.svg" alt="Logo" className="md:h-15 h-11 cursor-pointer p-1 m-0 transition-all ease-in hover:p-1.5" />
            </Link>

            <ul className="flex md:space-x-6 space-x-4 md:text-xl text-md font-medium md:px-6 px-1">
                <li><InteractiveLink to="/">Hjem</InteractiveLink></li>
                <li><InteractiveLink to="/om">Om</InteractiveLink></li>
                <li><InteractiveLink to="/kontakt">Kontakt</InteractiveLink></li>
            </ul>
        </nav>

    </>
  )
}

export default NavBar
