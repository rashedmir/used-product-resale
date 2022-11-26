import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Omega from '../Omega/Omega'


const OmegaMap = () => {
    const watches = useLoaderData();
    return (
        <div className='grid grid-cols-3 py-10 w-full mx-36'>
            {
                watches.map(watch => <Omega key={watch._id} watch={watch}></Omega>)
            }
        </div>
    );
};

export default OmegaMap;