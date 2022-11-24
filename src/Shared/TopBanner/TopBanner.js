import React from 'react';
import { Link } from 'react-router-dom';
import certified from '../../assets/certified.png'

const TopBanner = () => {
    return (
        <div>
            <div className='bg-black'>
                <div className='font1 text-sm py-3 mx-48 flex justify-between text-white'>
                    <h2>Free Overnight Shipping</h2>
                    <div className='flex'>
                        <img className='w-5 mx-2' src={certified} alt='' />
                        <h2 className='mr-5'>100% Certified Authentic</h2>
                        <Link to='/login'><h2 className='mr-2'>Login</h2></Link>
                        <h2 className='mr-2'>|</h2>
                        <Link to='/signup'><h2>Sign Up</h2></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;