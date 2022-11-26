import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const watches = useLoaderData();
    const date = new Date();
    console.log(watches.advertised);

    return (

        <div className='flex flex-wrap gap-10 py-10 w-full justify-around px-36'>
            {watches.map(watch => {
                return (
                    <div className={`flex flex-wrap w-96 mb-5 py-2 ${user.displayName == watch.userName ? '' : 'hidden'}`}>
                        {
                            user.displayName == watch.userName && (
                                <div class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
                                    <div className='text-right'><button className='text-4xl text-red-500 font-bold rounded px-1 pt-0'>×</button></div>
                                    <div className='flex justify-center'>
                                        <a href="/">
                                            <img class="rounded-t-lg w-48 py-5 h-80" src={watch.picture} alt="" />
                                        </a>
                                    </div>
                                    <div class="p-10">
                                        <a href="/">
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Brand: {watch.title}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Watch Name: {watch.name}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Location: {watch.location}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Resale Price: ${watch.resale_price}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Original Price: ${watch.original_price}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Years of use: {date.getFullYear() - watch.year_of_purchase}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Posted on: {watch.date.slice(0, 10)} </h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Seller: {watch.userName}</h5>
                                        </a>

                                        {
                                            watch.advertised == !true ?
                                                (
                                                    <div>
                                                        <button className='bg-gray-400 text-white rounded p-3'>Advertise</button>
                                                        <button className='bg-gray-400 text-white rounded p-3'>Read more</button>
                                                    </div>
                                                )
                                                :
                                                (
                                                    <div className='pl-5 flex flex- items-center'>
                                                        <p className='bg-green-400 text-white rounded p-3'>Advertised</p>
                                                        <button className='bg-gray-400 text-white rounded p-3'>Read more</button>
                                                    </div>
                                                )
                                        }
                                    </div>
                                </div>)}
                    </div>)
            })}
        </div>

    );
};

export default MyProducts;