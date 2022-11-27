import React from 'react';
import sub_img from '../assets/sub_img.jpg'

const Subscribe = () => {
    return (
        <div className='bg-black text-white grid grid-cols-2 justify-between '>
            <div className='w-8/12 ml-56 mt-28'>
                <div>
                    <h1 className='font1 font-bold mb-3'>SUBSCRIBE</h1>
                    <h1 className='text-6xl font-bold font4 mb-12'>Stay Updated</h1>
                    <h1 className='font1 mb-6'>Get access to exclusive insight not available anywhere else on this website! Sign up below.</h1>
                </div>
                <div>
                    <input className='shadow-xl py-3 w-full border-2 border-t-transparent border-l-transparent border-r-transparent bg-transparent border-gray-500' placeholder='Enter your email address'></input>
                </div>
                <button className='bg-white text-black font-bold rounded-full py-4 px-8 mt-10'>SUBSCRIBE</button>
            </div>
            <div>
                {/* <img className='float-right w-9/12 max-h- mr-28' src='https://www.xupes.com/magazine/Content/Images/Media/3974/MultiImages/Original/rolex-submariner-116610ln-on-black-3.jpg?w=925' alt=''/> */}
                <img className='float-right' src={sub_img} alt='' />
            </div>
        </div>
    );
};

export default Subscribe;