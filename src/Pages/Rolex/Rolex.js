import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Rolex = () => {
    const watches = useLoaderData();
    const date = new Date();
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='bg-black'>
                    <h1 className='font1 text-5xl font-bold text-white px-36 pt-24 pb-10'>Used Rolex Watches</h1>
                    <h1 className='font1 text-2xl font-bold text-white px-36 pb-10'>Buy Pre-owned Rolex</h1>
                    <h1 className='text-justify font1 text-sm text-white px-36'>Founded in 1905, Rolex has attracted luxury watch connoisseurs from around the globe who are interested in attaining a watch that's symbolic of class, prestige, and innovation. Shop the world's most highly sought-after used Rolex watches. Bob's Watches offers the largest and most trusted collection of Pre Owned Rolex watches for sale with 100% certified authenticity. Popular models:</h1>
                </div>
                <div className='bg-black'>
                    <img className='pl-28 pt-0 mt-0' src='https://c4.wallpaperflare.com/wallpaper/421/955/695/clock-rolex-time-watch-wallpaper-preview.jpg' alt=''/>
                </div>
            </div>            
            <div className='flex flex-wrap gap-10 py-10 w-full justify-around px-36'>
                {
                    watches.map(watch => {
                        return (<div className={`flex flex-wrap w-96 mb-5 py-2 ${watch.title == "Rolex" ? '' : 'hidden'}`}>
                            {watch.title == "Rolex" && (<>
                                <div class="flex flex-col max-w-sm ">
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
                                        <button className='bg-gray-700 w-full text-white ml-0 rounded p-3'>Book Now</button>
                                    </div>
                                </div>
                            </>)}
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default Rolex;