import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LuxuryWatches from '../../Pages/LuxuryWatches/LuxuryWatches'


const LuxuryWatchesMap = () => {
    const watches = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                watches.map(watch => <LuxuryWatches key={watch._id} watch={watch}></LuxuryWatches>)
            }
        </div>
    );
};

export default LuxuryWatchesMap;