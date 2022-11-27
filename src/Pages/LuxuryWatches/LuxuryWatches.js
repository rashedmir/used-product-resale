import React from 'react';
import { useLoaderData } from 'react-router-dom';


const LuxuryWatches = () => {
    const watches = useLoaderData();
    const date = new Date();
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='bg-black'>
                    <h1 className='font1 text-5xl font-bold text-white px-36 pt-24 pb-10'>Luxury Watches</h1>
                    <h1 className='text-justify font1 text-sm text-white px-36'> Your pre-owned online luxury watch dealer. We carry a large selection of some of the most popular luxury brands to ensure that you get exactly what you're looking for. Browse some of our used timepieces to find a secondhand wristwatch that fits your style.</h1>
                </div>
                <div className='bg-black'>
                    <img className='mr-36 pl-28 pt-0' src='https://deutschewealth.com/content/dam/deutschewealth/coneversation-assets/the-future-of-the-luxury-watch-industry/compressed-images/DB_2880x1240_Luxury_Watch.jpg' alt='' />
                </div>
            </div>
            <div className='flex flex-wrap gap-10 py-10 w-full justify-around px-36'>
                {
                    watches.map(watch => {
                        return (<div className={`flex flex-wrap w-96 mb-5 py-2 ${watch.title == "Luxury Watch" ? '' : 'hidden'}`}>
                            {watch.title == "Luxury Watch" && (
                                <div class="max-w-sm bg-white">
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
                            )}
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default LuxuryWatches;