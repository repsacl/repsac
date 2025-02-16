import { Link } from "react-router-dom"

function NavBar() {

  return (
    <>
        <nav className="flex items-center justify-between w-full p-4 border-b bg-rgb(240, 240, 240)">

            <div className="text-gray-500 text-sm">TODO</div>

            <Link to={"/"} className="absolute left-1/2 transform -translate-x-1/2">LOGO</Link>

            <ul className="flex md:space-x-6 space-x-4 md:text-lg text-sm font-medium md:px-6 px-1">
                <Link to="/login"><button className="rounded p-1">LOGIN</button></Link>
                <Link to="/signup"><button className="rounded p-1">SignUP</button></Link>
            </ul>
        </nav>

    </>
  )
}

export default NavBar
