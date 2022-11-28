import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { ToastContainer, toast, Flip, Slide, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from '../../Hooks/useTitle';

const MyProducts = () => {
    useTitle("My Products")
    const { user } = useContext(AuthContext);
    console.log(user.photoURL);
    const watches = useLoaderData();
    const date = new Date();

    const handleDelete = (id, name) => {
        const agree = window.confirm(`Are you sure you want to delete: ${name}`)
        console.log(agree);
        if (agree) {
            console.log("Deleting", name);
            fetch(`http://localhost:5000/watches/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        setTimeout(() => window.location.reload(false), 2000)
                        toast.success(name, 'deleted Successfully', {
                            position: "top-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                })
        }
    }


    const handleAdvertise = id => {
        fetch(`http://localhost:5000/watches/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTimeout(() => window.location.reload(false), 2000)
                toast.success('Advertised successfully', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }

    return (

        <div className='flex flex-wrap gap-10 py-10 w-full justify-around px-36'>
            {watches.map(watch => {
                return (
                    <div className={`flex flex-wrap w-96 mb-5 py-2 ${user.uid == watch.userID ? '' : 'hidden'}`}>
                        {
                            user.uid == watch.userID && (
                                <div class="flex flex-col max-w-sm ">
                                    <div className='text-right'><button onClick={() => handleDelete(watch._id, watch.name)} className='text-4xl text-red-500 font-bold rounded px-1 pt-0'>×</button></div>
                                    <div className='flex justify-center'>
                                        <a href="/">
                                            <img class="rounded-t-lg w-48 py-5 h-80" src={watch.picture} alt="" />
                                        </a>
                                    </div>
                                    <div class="p-10">
                                        <a href="/">
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Brand: {watch.title}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Watch Name: {watch.name}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Location: {watch.location}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Resale Price: ${watch.resale_price}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Original Price: ${watch.original_price}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Years of use: {date.getFullYear() - watch.year_of_purchase}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Posted on: {watch.date.slice(0, 10)} </h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Seller: {watch.userName}</h5>
                                        </a>

                                        {
                                            watch.advertised == "true" ?
                                                (
                                                    <div className='pl-5 flex flex- items-center'>
                                                        <p className='bg-green-400 text-white rounded-full px-4 font-bold p-3 font1'>Advertised</p>
                                                        <button className='bg-gray-400 text-white rounded-full p-3 font-bold font1'>Read more</button>
                                                    </div>
                                                )
                                                :
                                                (
                                                    <div>
                                                        <button onClick={() => handleAdvertise(watch._id)} className='bg-gray-400 text-white rounded-full px-4 font-bold p-3 font1'>Advertise</button>
                                                        <button className='bg-gray-400 text-white rounded-full px-9 p-3 font-bold font1'>Sold</button>
                                                        <ToastContainer
                                                            theme="dark"
                                                            position="top-center"
                                                            autoClose={3000}
                                                            hideProgressBar={false}
                                                            newestOnTop={false}
                                                            closeOnClick
                                                            rtl={false}
                                                            pauseOnFocusLoss={false}
                                                            draggable
                                                            pauseOnHover
                                                        />
                                                    </div>
                                                )


                                        }
                                    </div>
                                </div>)}
                    </div>)
            })}
        </div>

    );
};

export default MyProducts;