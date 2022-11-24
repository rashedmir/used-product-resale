// import { Button } from 'flowbite-react';
import React from 'react';
import logo from '../../assets/logot2t3.png'

const Navbar = () => {
    return (
        <div className='font2'>

            <nav class="bg-transparent h-36 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div class="container flex flex-wrap items-center justify-between mx-auto h-36">
                    <a href='/' class="flex items-center h-36">
                        <img src={logo} class="w-60" alt="/" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-xl text-gray-500 rounded-2xl 
                    md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 
                                md:text-xl md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-white">
                            <li>
                                <a href="/" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0" 
                                aria-current="page">ROLEX</a>
                            </li>
                            <li>
                                <a href="/" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                                md:hover:text-blue-700 md:p-0">OMEGA</a>
                            </li>
                            <li>
                                <a href="/" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent 
                                md:border-0 md:hover:text-blue-700 md:p-0">LUXURY WATCHES</a>
                            </li>
                            <li>
                                <a href="/" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent 
                                md:border-0 md:hover:text-blue-700 md:p-0">VINTAGE ROLEX</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>

    );
};

export default Navbar;