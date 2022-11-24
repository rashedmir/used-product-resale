import React from 'react';
import certified from '../../assets/certified.png'

const TopBanner = () => {
    return (
        <div>
            <div className='bg-black'>
                <div className='font1 text-sm py-3 mx-48 flex justify-between text-white'>
                    <h2>Free Overnight Shipping</h2>
                    <div className='flex'>
                        <img className='w-5 mx-2' src={certified} alt='' />
                        <h2>100% Certified Authentic</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;