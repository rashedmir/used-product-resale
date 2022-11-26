import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyProducts from './MyProducts';

const MyProductsMap = () => {
    const { user } = useContext(AuthContext);
    const watches = useLoaderData();
    console.log(watches);

    return (

        <div className='grid grid-cols-3 py-10 w-full mx-36'>
            {watches.map(watch => (<MyProducts key={watch._id} watch={watch}></MyProducts>))}
        </div>

    );
};

export default MyProductsMap;