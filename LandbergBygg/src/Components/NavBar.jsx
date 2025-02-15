import InteractiveLink from "./InteractiveLink"
function NavBar() {

  return (
    <>
        <nav className="flex items-center justify-between w-full p-4 border-b bg-rgb(240, 240, 240)">

            <div className="text-gray-500 text-sm">Bygg</div>

            <div className="absolute left-1/2 transform -translate-x-1/2">
                <img src="/src/assets/fulllogoTest.svg" alt="Logo" className="md:h-9 h-6 cursor-pointer" />
                {/* <p>LOGO</p> */}
            </div>

            <ul className="flex md:space-x-6 space-x-4 md:text-lg text-sm font-medium md:px-6 px-1">
                <li><InteractiveLink to="/">Hjem</InteractiveLink></li>
                <li><InteractiveLink to="/">Om</InteractiveLink></li>
                <li><InteractiveLink to="/">Kontakt</InteractiveLink></li>
            </ul>
        </nav>

    </>
  )
}

export default NavBar
