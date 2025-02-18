import Link from 'next/link';
import Btn from './Button';

function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full p-4 border-b bg-rgb(240, 240, 240)">
      <div className="text-gray-500 text-sm">TODO</div>
      <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">LOGO</Link>
      <ul className="flex md:space-x-6 space-x-4 md:text-lg text-sm font-medium md:px-6 px-1">
        <div>
          <Link href="/login">
            <Btn className={"bg-blue-700 p-1 px-3 m-1 border-blue-700 hover:bg-transparent shadow-md shadow-black hover:shadow-blue-700"}>
              LOGIN
            </Btn>
          </Link>
          <Link href="/signup">
            <Btn className={"hover:bg-blue-700 px-3 p-1 m-1 border-blue-700 shadow-md shadow-black hover:shadow-lg"}>
              SIGNUP
            </Btn>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;