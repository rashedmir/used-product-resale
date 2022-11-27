import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
// import { ToastContainer, toast, Flip, Slide, Zoom } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const [advertise, setAdvertise] = useState({});
    const watches = useLoaderData();
    const date = new Date();

    // const AllWatches = () => {
    // const { data: watch = [], refetch } = useQuery({
    //     // queryKey: ['watches'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/watches')
    //         const data = await res.json();
    //         console.log(data);
    //         return data;
    //     }
    // })
    // }


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
                window.location.reload(false)
            })
    }



    // console.log(watches.advertised);

    // const handleUpdateAdvertise = (event, _id) => {
    //     event.preventDefault();
    //     console.log(event, _id);
    //     fetch(`http://localhost:5000/watches/${_id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(advertise)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 console.log(data);
    //                 // alert("Updated successfully")
    //                 // setTimeout(() => navigate(from, { replace: true }), 2000)
    //                 // toast.success('Review updated Successfully', {
    //                 //     position: "top-center",
    //                 //     autoClose: 1000,
    //                 //     hideProgressBar: false,
    //                 //     closeOnClick: true,
    //                 //     pauseOnHover: true,
    //                 //     draggable: true,
    //                 //     progress: undefined,
    //                 // });

    //             }
    //         })

    // }

    // const handleInputBlur = event => {
    //     const field = event.target.name;
    //     const value = event.target.value;
    //     const newCategory = { ...advertise.id};
    //     newCategory[field] = value;
    //     setAdvertise(newCategory);

    // }

    return (

        <div className='flex flex-wrap gap-10 py-10 w-full justify-around px-36'>
            {watches.map(watch => {
                return (
                    <div className={`flex flex-wrap w-96 mb-5 py-2 ${user.displayName == watch.userName ? '' : 'hidden'}`}>
                        {
                            user.displayName == watch.userName && (
                                <div class="flex flex-col max-w-sm ">
                                    <div className='text-right'><button className='text-4xl text-red-500 font-bold rounded px-1 pt-0'>×</button></div>
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
                                                        {/* <form>
                                                            <label for="advertised" className='font1 text-sm font-bold'>Advertisement option</label>
                                                            <select onBlur={handleInputBlur} name="advertised" id="advertised" className='font1' required>
                                                                
                                                                <option value="">Please choose</option>
                                                                <option value="true">Advertise</option>
                                                                <option value="false">Remove Advertise</option>
                                                            </select>
                                                            <button onSubmit={()=>handleUpdateAdvertise(watch._id)}>ok</button>
                                                        </form> */}
                                                        <button onClick={() => handleAdvertise(watch._id)} className='bg-gray-400 text-white rounded-full px-4 font-bold p-3 font1'>Advertise</button>
                                                        <button className='bg-gray-400 text-white rounded-full p-3 font-bold font1'>Read more</button>
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