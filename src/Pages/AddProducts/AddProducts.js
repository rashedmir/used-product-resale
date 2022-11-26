import React, { useContext, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
// import './AddProducts.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { ToastContainer, toast, Flip, Slide, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddProducts = () => {
    useTitle("Add Product")
    const { user } = useContext(AuthContext);
    const [category, setCategory] = useState({});

    const navigate = useNavigate();
    const from = '/homepage/myproductmap';

    const handleAddService = event => {
        event.preventDefault();
        // console.log(user);


        fetch('http://localhost:5000/watches', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => {
                setTimeout(() => navigate(from, { replace: true }), 2000)
                toast.success('Service added successfully', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log(data);
                

            })
    }

    const handleInputBlur = event => {
        const date = new Date();
        const userID = user.uid;
        const userName = user.displayName;
        const purchased = false;
        const advertised = false;
        const field = event.target.name;
        const value = event.target.value;
        const newCategory = { ...category, date, userID, userName, purchased, advertised };
        newCategory[field] = value;
        setCategory(newCategory);
    }

    return (

        <form onSubmit={handleAddService}>
            <div className="mx-56">
                <h2 className='text-center font1 font-bold text-2xl my-4'>Please fill up the information form below:</h2>
                <div className='my-4'>
                    <div>
                        <label for="title" className='font1 text-xl font-bold'>Brand Name</label>
                    </div>
                    <div>
                        <select onBlur={handleInputBlur} name="title" id="title" className='font1' required>
                            <option value="">Please choose a name</option>
                            <option value="Rolex">Rolex</option>
                            <option value="Omega">Omega</option>
                            <option value="Luxury Watch">Luxury Watches</option>
                            <option value="Vintage Rolex">Vintage Rolex</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label for="last_name" className="block mb-2 font1 text-xl font-bold text-gray-900">Watch Name</label>
                    <input onBlur={handleInputBlur} type="text" name="name" id="last_name" className="field_input2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Omega Seamaster, Speedmaster etc..." required />
                </div>
                <div className='my-4'>
                    <div>
                        <label for="location" className='font1 text-xl font-bold'>Location</label>
                    </div>
                    <div>
                        <select onBlur={handleInputBlur} name="location" id="location" className='font1' required>
                            <option value="">Please choose location</option>
                            <option value="Barishal">Barishal</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Mymensingh">Mymensingh</option>
                            <option value="Rajshashi">Rajshashi</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label for="phone" className="block mb-2 text-xl font-bold font1 text-gray-900">Resale Price in $</label>
                    <input onBlur={handleInputBlur} type="number" name="resale_price" id="phone" className="field_input2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                </div>
                <div>
                    <label for="phone" className="block mt-4 mb-2 text-xl font-bold font1 text-gray-900">Original Price in $</label>
                    <input onBlur={handleInputBlur} type="number" name="original_price" id="phone" className="field_input2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                </div>
                <div className='my-4'>
                    <div>
                        <label for="condition" className='font1 text-xl font-bold'>Condition</label>
                    </div>
                    <div>
                        <select onBlur={handleInputBlur} name="condition" id="condition" className='font1' required>
                            <option value="">Please choose the product condition</option>
                            <option value="excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                        </select>
                    </div>
                </div>

                <div className='my-4'>
                    <div>
                        <label for="year_of_purchase" className='font1 font-bold text-xl'>Year of purchase</label>
                    </div>
                    <div>
                        <select onBlur={handleInputBlur} name="year_of_purchase" id="year_of_purchase" className='font1' required>
                            <option value="">Please choose the year of purchase</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label for="company" className="block mb-2 text-xl font-bold font1 text-gray-900">Image URL</label>
                    <input onBlur={handleInputBlur} type="text" name="picture" id="company" className="field_input2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="http://.....com/abcd.jpg .png" required />
                </div>
                <div>
                    <label for="phone" className="block mt-4 mb-2 text-xl font-bold font1 text-gray-900">Phone Number</label>
                    <input onBlur={handleInputBlur} type="number" name="phone" id="phone" className="field_input2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="+8801******" required />
                </div>
                <div>
                    <label for="website" className="block mt-4 mb-2 text-xl font-bold font1 text-gray-900">Description</label>
                    <textarea onBlur={handleInputBlur} type="text" name='details' id="message" rows="4" className="field_input1 font1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
                 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write something about the watch..."></textarea>
                </div>
            </div>

            <div className='text-center'>
                <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-24 border border-gray-400 rounded shadow 
                    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100 my-6">Submit</button>
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

        </form>

    );
};

export default AddProducts;