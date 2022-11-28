import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';


const Omega = () => {
    useTitle("Omega")
    const watches = useLoaderData();
    const date = new Date();

    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='bg-black'>
                    <img className='w-8/12 ml-36 pl-28 pt-0' src='https://i.ibb.co/qs6HwMS/omega.jpg' alt='' />
                </div>
                <div className='bg-black'>
                    <h1 className='font1 text-5xl font-bold text-white px-36 pt-24 pb-10'>Omega Watches</h1>
                    <h1 className='font1 text-2xl font-bold text-white px-36 pb-10'>Buy Pre-owned Omega</h1>
                    <h1 className='text-justify font1 text-sm text-white px-36'>With a rich history dating back to 1848, Omega is one of the world's oldest and most widely respected luxury watch manufacturers. The iconic Swiss timepiece company produces everything from elegant dress watches to technologically advanced sports chronographs, and Omega watches have been worn by everyone from actors in films to astronauts on the moon.</h1>
                </div>
            </div>
            <div className='flex flex-wrap gap-10 py-10 w-full justify-around px-36'>
                {
                    watches.map(watch => {
                        return (<div key={watch._id} className={`flex flex-wrap w-96 mb-5 py-2 ${watch.title == "Omega" ? '' : 'hidden'} ${watch.purchased == "true" ? 'hidden' : ''}`}>
                            {watch.title == "Omega" && (
                                <div class="flex flex-col max-w-sm">
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
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{watch.details.slice(0, 100)}...</p>
                                        <Link to='/homepage/private/omega'>
                                            <button className='bg-gray-700 w-full text-white ml-0 rounded p-3'>Book Now</button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default Omega;