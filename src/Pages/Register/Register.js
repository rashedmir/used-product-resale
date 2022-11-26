import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import './Register.css'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import logo from '../../assets/logot2t3.png'

const Register = () => {
    useTitle('Register');

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.userType.value;
        const email = form.email.value;
        const password = form.password.value;



        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        navigate(from, { replace: true });
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }


    return (
        <div className='bg-black h-screen bg-no-repeat bg-cover'>
            <div className='flex flex-col items-center'>
                {/* <Header></Header> */}
                <div className=''>
                    <Link to='/'>
                        <div className='flex items-center mb-5 mt-14'>
                            <img className='w-28  rounded-lg' src={logo} alt='img' />
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col items-center md:w-1/3 bg-white rounded-lg mx-16 text-gray-800 p-5 mb-16 border-2'>
                    <div>
                        <h1 className='font-bold text-3xl mb-2'>Register account</h1>
                    </div>
                    <div>
                        <p className='mb-5'>Already have an account? <Link className='text-blue-600' to='/login'>Log In</Link></p>
                    </div>
                    <div className='flex flex-row items-center mt-5'>
                        <hr className='border-2 w-60 mr-5'></hr>
                        <p className='font-bold text-2xl text-gray-300'>or</p>
                        <hr className='border-2 w-60 ml-5'></hr>
                    </div>
                    <form onSubmit={handleSubmit} className='w-11/12 mt-8'>
                        <div className="mb-6">
                            <p className="block mb-2 text-sm font-medium text-gray-900">Full Name</p>
                            <input name="name" type="text" id="f_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                             focus:border-blue-500 block w-full p-2.5 " placeholder="Jhankar Mahbub" />
                        </div>
                        <div className="mb-6">
                            <p className="block mb-2 text-sm font-medium text-gray-900 ">Your email</p>
                            <input name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                             focus:border-blue-500 block w-full p-2.5 " placeholder="name@t2t.com" required />
                        </div>
                        <div className="mb-6">
                            <p className="block mb-2 text-sm font-medium text-gray-900 ">Your password</p>
                            <input name="password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-2.5 " placeholder='••••••••••••' required />
                        </div>


                        <fieldset onClick={handleAccepted}>
                            <p className='mb-3 text-lg font-'>Select user type:</p>
                            {/* <legend class="sr-only">Countries</legend> */}

                            <div class="flex items-center mb-4">
                                <input id="buyer" type="radio" name="userType" value="buyer" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked />
                                <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Buyer
                                </label>
                            </div>

                            <div class="flex items-center mb-4">
                                <input id="seller" type="radio" name="userType" value="seller" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="country-option-2" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Seller
                                </label>
                            </div>
                        </fieldset>


                        <div className="flex items-center mb-4">
                            <input onClick={handleAccepted} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 ">{<>Accept <Link className='text-blue-600' to="/terms">Terms & conditions</Link></>}</label>
                        </div>
                        <button type="submit" disabled={!accepted} className="disabled:bg-gray-400 text-white bg-blue-700 focus:ring-4 focus:outline-none 
                        focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Sign up</button>
                        <div>{error}</div>
                    </form>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Register;