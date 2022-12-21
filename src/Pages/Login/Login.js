import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { GoogleAuthProvider } from 'firebase/auth';
import logo from '../../assets/logot2t3.png';
import useTitle from '../../Hooks/useTitle';
import './Login.css';

import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    useTitle('Login');

    const [error, setError] = useState('');
    const { signIn, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider()

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                fetch('https://b6a11-service-review-server-side-rashedmir.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('serviceReview', data.token);
                        form.reset();
                        setError('');
                        navigate(from, { replace: true });
                    })

            })
            .catch(error => {
                console.error(error)
                if (error.code === "auth/wrong-password") {
                    setError("Wrong username or password")
                }
                else if (error.code === "auth/user-not-found") {
                    setError("Email not registered")
                }
                else {

                    setError(error.message);
                }
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <div className=' bg-black h-screen'>
            <div className='flex flex-col items-center md:mb-48 mb-24'>
                {/* <Header></Header> */}
                <div className=''>
                    <Link to='/'>
                        <div className='flex items-center my-10'>
                            <img className='w-72' src={logo} alt='' />
                            {/* <h1 className='text-5xl font-bold text-gray-600'>Trash 2 Treasure</h1> */}
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col items-center w-4/5 md:w-1/3 bg-white rounded-lg mx-16 text-gray-800 p-5 text-center border-2'>
                    <div>
                        <h1 className='font-bold text-3xl mb-2'>Login to your account</h1>
                    </div>
                    <div>
                        <p className='mb-10'>Don't have an account? <Link className='text-blue-600' to='/register'>Sign Up</Link></p>
                    </div>
                    <div>
                        <button onClick={handleGoogleSignIn} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                            Log in with Google
                        </button>
                    </div>
                    <div className='flex flex-row items-center mt-5'>
                        <hr className='border-2 w-24 md:w-60 mr-5'></hr>
                        <p className='font-bold text-2xl text-gray-300'>or</p>
                        <hr className='border-2 w-24 md:w-60 ml-5'></hr>
                    </div>
                    <form onSubmit={handleSubmit} className='w-11/12 mt-8'>
                        <div className="mb-6">
                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</p>
                            <input name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                             focus:border-blue-500 block w-full p-2.5" placeholder="name@t2t.com" required />
                        </div>
                        <div className="mb-6">
                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</p>
                            <input name="password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-2.5" placeholder='•••••••••••••' required />
                        </div>
                        <button type="submit" className="ml-0 md:ml-8 mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                        focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                        <div>{error}</div>
                    </form>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Login;