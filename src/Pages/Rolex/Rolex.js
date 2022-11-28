import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
// import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Rolex = () => {
    useTitle("Rolex")
    const { user } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [modalObject, setModalObject] = useState();
    console.log(user);
    const watches = useLoaderData();
    const date = new Date();


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const brand_name = form.brand_name.value;
        const product_name = form.product_name.value;
        const username = form.username.value;
        const resale_price = form.resale_price.value;
        const phone = form.phone.value;
        const meetingLoc = form.meetingLoc.value;
        const booking_date = form.booking_date.value;

        const booking = {
            brand_name,
            product_name,
            username,
            resale_price,
            phone,
            meetingLoc,
            booking_date,
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setShowModal(false)
                if (data.acknowledged) {
                    // setTreatment(null);
                    // toast.success('Booking confirmed');
                    // refetch();
                }
                else {
                    // toast.error(data.message)
                }
            })
    }


    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='bg-black'>
                    <h1 className='font1 text-5xl font-bold text-white px-36 pt-24 pb-10'>Used Rolex Watches</h1>
                    <h1 className='font1 text-2xl font-bold text-white px-36 pb-10'>Buy Pre-owned Rolex</h1>
                    <h1 className='text-justify font1 text-sm text-white px-36'>Founded in 1905, Rolex has attracted luxury watch connoisseurs from around the globe
                        who are interested in attaining a watch that's symbolic of class, prestige, and innovation. Shop the world's most highly sought-after used Rolex watches.
                        Bob's Watches offers the largest and most trusted collection of Pre Owned Rolex watches for sale with 100% certified authenticity. Popular models:</h1>
                </div>
                <div className='bg-black'>
                    <img className='pl-28 pt-0 mt-0' src='https://c4.wallpaperflare.com/wallpaper/421/955/695/clock-rolex-time-watch-wallpaper-preview.jpg' alt='' />
                </div>
            </div>
            <div className='flex flex-wrap gap-10 py-10 w-full justify-around px-36'>
                {
                    watches.map(watch => {
                        return (<div className={`flex flex-wrap w-96 mb-5 py-2 ${watch.title == "Rolex" ? '' : 'hidden'} ${watch.purchased == "true" ? 'hidden' : ''}`}>
                            {watch.title == "Rolex" && (<>
                                <div class="flex flex-col max-w-sm ">
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
                                        {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{watch.details.slice(0, 100)}...</p>
                                        <Link to='/homepage/private/rolex'><button onClick={() => setShowModal(true)} className='bg-gray-700 w-full text-white ml-0 rounded p-3'>Book Now</button></Link> */}

                                        {

                                            user?.photoURL == "seller" ? (<div><p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{watch.details.slice(0, 100)}...</p>
                                                <Link to='/'><button disabled className='bg-red-200 w-full text-white ml-0 rounded p-3'>Book Now</button></Link></div>) : (<div><p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{watch.details.slice(0, 100)}...</p>
                                                    <Link to='/homepage/private/rolex'><button onClick={() => { setShowModal(true); setModalObject(watch) }} className='bg-gray-700 w-full text-white ml-0 rounded p-3'>Book Now</button></Link></div>)
                                        }

                                        {showModal && modalObject && (
                                            <>
                                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                    <div >
                                                        {/*content*/}
                                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                            {/*header*/}
                                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                                <h3 className="text-3xl font-semibold">
                                                                    Booking details:
                                                                </h3>
                                                                <button
                                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                    onClick={() => setShowModal(false)}
                                                                >
                                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                        ×
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            {/*body*/}
                                                            <div>
                                                                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 m-24'>
                                                                    <input name='brand_name' type="text" defaultValue={"Brand: " + modalObject.title} disabled className="text-lg font-bold border-transparent w-full" />
                                                                    <input name='product_name' type="text" defaultValue={"Product Name: " + modalObject.name} disabled className="text-lg font-bold border-transparent w-full" />
                                                                    <input name='username' type="text" defaultValue={"Customer Name: " + user?.displayName} disabled placeholder="Your Name" className="text-lg font-bold border-transparent" />
                                                                    <input name='email' type="text" defaultValue={"Email: " + user?.email} disabled placeholder="Email Address" className="text-lg font-bold border-transparent" />
                                                                    <input name='resale_price' type="text" defaultValue={"Resale Price: $" + modalObject.resale_price} disabled placeholder="Email Address" className="text-lg font-bold border-transparent" />
                                                                    <input name='phone' type="number" placeholder="Phone Number" required className="input w-full input-bordered" />
                                                                    <input name='meetingLoc' type="text" placeholder="Watch Pick up location" required className="input w-full input-bordered" />
                                                                    <input name='booking_date' type="text" value={date} disabled className="input w-full input-bordered" />
                                                                    <br />
                                                                    <input className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit" value="Submit" />
                                                                    <input onClick={() => setShowModal(false)} className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit" value="Cancel" />
                                                                    {/* footer
                                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                                        <button
                                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                            type="button"
                                                                            onClick={() => setShowModal(false)}
                                                                        >
                                                                            Close
                                                                        </button>
                                                                        <button
                                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                            type="button"
                                                                            onClick={() => setShowModal(false)}
                                                                        >
                                                                            Save Changes
                                                                        </button>
                                                                    </div> */}
                                                                </form>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                            </>
                                        )}

                                    </div>
                                </div>
                            </>)}
                        </div>)
                    })
                }
            </div>
            <div>
                {

                }
            </div>
        </div>
    );
};

export default Rolex;