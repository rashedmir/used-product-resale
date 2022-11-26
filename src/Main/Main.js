import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import video from '../assets/Homepage_video.mp4'
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import TopBanner from '../Shared/TopBanner/TopBanner';
import './Main.css'

const Main = () => {
    const watches = useLoaderData();
    return (
        <div>
            <TopBanner></TopBanner>
            <div className='relative'>
                <div className='absolute w-full'>
                    <div>
                        <Navbar></Navbar>
                    </div>
                    <div className='text-white mt-64 mx-44'>
                        <h1 className='text-5xl font3 mb-3'>The pre-owned</h1>
                        <h1 className='text-8xl font4 font-semibold'>Watch Exchange</h1>
                        <div className='mt-5 font-bold'>
                            <Link to='/login'><button className='bg-white rounded-full mr-10 text-black py-5 px-6 custom-btn btn-8'>BUY WATCH</button></Link>
                            <Link to='/login'><button className='bg-white rounded-full mr-10 text-black py-5 px-6 custom-btn btn-8'>SELL WATCH</button></Link>
                        </div>
                        <p className='text-xl font1 text-center mt-48'>One Man's Trash Another Man's Treasure</p>
                    </div>
                </div>
                <div className='main'>
                    <video src={video} autoPlay loop muted type='video/mp4'></video>
                </div>
            </div>
           {/* All watches */}
            <div>
                <h2 className='mx-48 mt-10 text-2xl font1 font-bold'>SHOP</h2>
                <h2 className='mx-48 mt-5 text-5xl font4 font-bold'>Rolex Watches</h2>
                <div className='flex flex-wrap gap-10 py-10 w-full justify-around px-36'>
                    {
                        watches.map(watch => {
                            return (<div key={watch._id} className={`flex flex-wrap w-96 mb-5 py-2 ${watch.title == "Rolex" ? '' : 'hidden'}`}>
                                {watch.title == "Rolex" && (<div class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">

                                    <div className='flex justify-center'>
                                        <a href="/">
                                            <img class="rounded-t-lg w-48 py-5 h-80" src={watch.picture} alt="" />
                                        </a>
                                    </div>
                                    <div class="p-10">
                                        <a href="/rolex">
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Brand: {watch.title}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Watch Name: {watch.name}</h5>

                                        </a>

                                    </div>
                                </div>)

                                }
                            </div>)
                        })
                    }
                </div>
            </div>
            <hr class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
            <div>
                <h2 className='mx-48 mt-5 text-5xl font4 font-bold'>Omega Watches</h2>
                <div className='flex flex-wrap gap-10 py-10 w-full justify-around px-36'>
                    {
                        watches.map(watch => {
                            return (<div key={watch._id} className={`flex flex-wrap w-96 mb-5 py-2 ${watch.title == "Omega" ? '' : 'hidden'}`}>
                                {watch.title == "Omega" && (<div class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">

                                    <div className='flex justify-center'>
                                        <a href="/">
                                            <img class="rounded-t-lg w-48 py-5 h-80" src={watch.picture} alt="" />
                                        </a>
                                    </div>
                                    <div class="p-10">
                                        <a href="/rolex">
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Brand: {watch.title}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Watch Name: {watch.name}</h5>

                                        </a>

                                    </div>
                                </div>)

                                }
                            </div>)
                        })
                    }
                </div>
            </div>
            <hr class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
            <div>
                <h2 className='mx-48 mt-5 text-5xl font4 font-bold'>Luxury Watches</h2>
                <div className='flex flex-wrap gap-10 py-10 w-full justify-around px-36'>
                    {
                        watches.map(watch => {
                            return (<div key={watch._id} className={`flex flex-wrap w-96 mb-5 py-2 ${watch.title == "Luxury Watch" ? '' : 'hidden'}`}>
                                {watch.title == "Luxury Watch" && (<div class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">

                                    <div className='flex justify-center'>
                                        <a href="/">
                                            <img class="rounded-t-lg w-48 py-5 h-80" src={watch.picture} alt="" />
                                        </a>
                                    </div>
                                    <div class="p-10">
                                        <a href="/rolex">
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Brand: {watch.title}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Watch Name: {watch.name}</h5>

                                        </a>

                                    </div>
                                </div>)

                                }
                            </div>)
                        })
                    }
                </div>
            </div>
            <hr class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
            <div>
                <h2 className='mx-48 mt-5 text-5xl font4 font-bold'>Vintage Rolex</h2>
                <div className='flex flex-wrap gap-10 py-10 w-full justify-around px-36'>
                    {
                        watches.map(watch => {
                            return (<div key={watch._id} className={`flex flex-wrap w-96 mb-5 py-2 ${watch.title == "Vintage Rolex" ? '' : 'hidden'}`}>
                                {watch.title == "Vintage Rolex" && (<div class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">

                                    <div className='flex justify-center'>
                                        <a href="/">
                                            <img class="rounded-t-lg w-48 py-5 h-80" src={watch.picture} alt="" />
                                        </a>
                                    </div>
                                    <div class="p-10">
                                        <a href="/rolex">
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Brand: {watch.title}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Watch Name: {watch.name}</h5>

                                        </a>

                                    </div>
                                </div>)

                                }
                            </div>)
                        })
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;