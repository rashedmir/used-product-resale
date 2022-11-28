import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { ToastContainer, toast, Flip, Slide, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from '../../Hooks/useTitle';

const MyOrders = () => {
    useTitle("My Orders")
    const { user } = useContext(AuthContext);
    console.log(user.photoURL);
    const bookings = useLoaderData();

    return (

        <div className='flex flex-wrap gap-10 py-10 w-full justify-around px-36'>
            {bookings.map(booking => {
                return (
                    <div className={`flex flex-wrap w-96 mb-5 py-2 ${user.uid == booking.buyerId ? '' : 'hidden'}`}>
                        {
                            user.uid == booking.buyerId && (
                                <div class="flex flex-col max-w-sm ">                                    
                                    <div className='flex justify-center'>
                                        <a href="/">
                                            <img class="rounded-t-lg w-48 py-5 h-80" src={booking.watch_picture} alt="" />
                                        </a>
                                    </div>
                                    <div class="p-10">
                                        <a>                                            
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Watch Name: {booking.product_name}</h5>                                            
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Resale Price: ${booking.resale_price}</h5>                                            
                                            <button className="bg-emerald-500 text-white font1 font-bold uppercase text-sm px-6 py-3 rounded shadow">Pay</button>
                                        </a>
                                        
                                    </div>
                                </div>)}
                    </div>)
            })}
        </div>

    );
};

export default MyOrders;