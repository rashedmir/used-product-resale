import React from 'react';
import video from '../assets/Homepage_video.mp4'
import Navbar from '../Shared/Navbar/Navbar';
import TopBanner from '../Shared/TopBanner/TopBanner';
import './Main.css'

const Main = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <div className='relative'>
                <div className='absolute w-full'>
                    <div>
                        <Navbar></Navbar>
                    </div>
                    <div className='text-white mt-64 mx-44'>
                        <h1 className='text-5xl font3 mb-3'>The preowned</h1>
                        <h1 className='text-8xl font4 font-semibold'>Watch Exchange</h1>
                        <div className='mt-5 font-bold'>
                            <button className='bg-white rounded-full mr-10 text-black py-5 px-6 custom-btn btn-8'>BUY WATCH</button>
                            <button className='bg-white rounded-full mr-10 text-black py-5 px-6 custom-btn btn-8'>SELL WATCH</button>
                        </div>
                        <p className='text-xl font1 text-center mt-48'>One Man's Trash Another Man's Treasure</p>
                    </div>
                </div>
                <div className='main'>
                    <video src={video} autoPlay loop muted type='video/mp4'></video>
                </div>
            </div>
        </div>
    );
};

export default Main;