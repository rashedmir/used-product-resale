// import { Button } from 'flowbite-react';
import React from 'react';
import logo from '../../assets/logot2t3.png'
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <div className="font2">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black font2">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full flex justify-between relative lg:w-auto lg:static lg:block lg:justify-start">
              <a href="/">
                <img src={logo} className="w-60" alt="/" />
              </a>

              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <MdMenuOpen />
              </button>
            </div>
            <div
              className={
                "lg:flex items-center" + (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul
                className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 
                                md:text-xl md:font-medium md:border-0 md:bg-transparent "
              >
                <li className="nav-item">
                  <a
                    href="/homepage/rolex"
                    className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    ROLEX
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/homepage/omega"
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                                md:hover:text-blue-700 md:p-0"
                  >
                    OMEGA
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/homepage/luxurywatches"
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent 
                                md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    LUXURY WATCHES
                  </a>
                </li>
                <li>
                  <a
                    href="/homepage/vintagerolex"
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent 
                                md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    VINTAGE ROLEX
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;