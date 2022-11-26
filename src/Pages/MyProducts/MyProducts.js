import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyProducts = ({ watch }) => {
    const { user } = useContext(AuthContext)
    return (
        <div className='flex flex-wrap w-96 mb-5 py-2'>
            {
                user.displayName == watch.userName ? (
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
                    <div className='flex justify-center'>
                        <a href="/">
                            <img class="rounded-t-lg w-48 py-5" src={watch.picture} alt="" />
                        </a>
                    </div>
                    <div class="p-5">
                        <a href="/">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brand: {watch.title}</h5>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Watch Name: {watch.name}</h5>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Location: {watch.location}</h5>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Resale Price: {watch.resale_price}</h5>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Original Price: {watch.original_price}</h5>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Years of use: </h5>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Posted on: {watch.date.slice(0, 10)} </h5>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Seller: {watch.userName}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{watch.details.slice(0, 100)}...</p>
                        <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>) : (<></>)
            }
        </div>
    );
};

export default MyProducts;