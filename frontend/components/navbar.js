export default function NavBar() {
  return (
    <header>
      <nav className="bg-red border-grey-20">
        <div className="max-w-screen-xl flex className-wrap items-center justify-between mx-auto p-4">
          <a href="https://localhost:3000" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.svg" className="h-8" alt="Logo" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Main Menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium text-white flex flex-col p-4 mt-0 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse">
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}