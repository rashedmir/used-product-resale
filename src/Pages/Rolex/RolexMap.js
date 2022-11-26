import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rolex from './Rolex';

const RolexMap = () => {
    const watches = useLoaderData();
    return (
        <div className='grid grid-cols-3 py-10 w-full mx-36'>
            {
                watches.map(watch => <Rolex key={watch._id} watch={watch}></Rolex>)
            }
        </div>
    );
};

export default RolexMap;