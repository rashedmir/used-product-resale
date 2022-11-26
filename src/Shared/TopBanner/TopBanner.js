import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import certified from '../../assets/certified.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const TopBanner = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
        console.log(user.displayName);
    }
    return (
        <div className='sticky top-0'>
            {
                user ? (<><div className='bg-black'>
                    {
                        user.photoURL == 'admin' ? (<><div className='font1 text-sm py-3 mx-48 flex justify-between items-center text-white'>
                            <h2>Free Overnight Shipping</h2>
                            <div className='flex items-center'>
                                <img className='w-5 mx-2' src={certified} alt='' />
                                <h2 className='mr-5'>100% Certified Authentic</h2>
                                <Link to=''><h2 className='mr-2'>All Seller</h2></Link>
                                <h2 className='mr-2'>|</h2>
                                <Link to=''><h2>All Buyer</h2></Link>
                                <button onClick={handleLogOut} className='my-0 ml-10 text-white'>Log Out</button>
                                <p>{user.displayName}</p>
                            </div>
                        </div></>) : (<>{
                            user.photoURL == 'seller' ? (<>
                                <div className='font1 text-sm py-3 mx-48 flex justify-between items-center text-white'>
                                    <h2>Free Overnight Shipping</h2>
                                    <div className='flex items-center'>
                                        <img className='w-5 mx-2' src={certified} alt='' />
                                        <h2 className='mr-5'>100% Certified Authentic</h2>
                                        <Link to='/homepage/addproducts'><h2 className='mr-2'>Add Products</h2></Link>
                                        <h2 className='mr-2'>|</h2>
                                        <Link to='/homepage/myproduct'><h2>My Products</h2></Link>
                                        <button onClick={handleLogOut} className='my-0 ml-10 text-white'>Log Out</button>
                                        <p>{user.displayName}</p>
                                    </div>
                                </div></>) : (<><div className='font1 text-sm py-3 mx-48 flex justify-between items-center text-white'>
                                    <h2>Free Overnight Shipping</h2>
                                    <div className='flex items-center'>
                                        <img className='w-5 mx-2' src={certified} alt='' />
                                        <h2 className='mr-5'>100% Certified Authentic</h2>
                                        <Link to=''><h2 className='mr-2'>My Orders</h2></Link>
                                        <button onClick={handleLogOut} className='my-0 ml-10 text-white'>Log Out</button>
                                        <p>{user.displayName}</p>
                                    </div>
                                </div></>)
                        }</>)
                    }
                    {/* <button className='text-white'>Log Out</button> */}
                </div>
                </>) : (<><div className='bg-black'>
                    <div className='font1 text-sm py-3 mx-48 flex justify-between text-white'>
                        <h2>Free Overnight Shipping</h2>
                        <div className='flex'>
                            <img className='w-5 mx-2' src={certified} alt='' />
                            <h2 className='mr-5'>100% Certified Authentic</h2>
                            <Link to='/login'><h2 className='mr-2'>Login</h2></Link>
                            <h2 className='mr-2'>|</h2>
                            <Link to='/register'><h2>SignUp</h2></Link>
                        </div>
                    </div>
                </div>
                </>)
            }
            {/* <div className='bg-black'>
                <div className='font1 text-sm py-3 mx-48 flex justify-between text-white'>
                    <h2>Free Overnight Shipping</h2>
                    <div className='flex'>
                        <img className='w-5 mx-2' src={certified} alt='' />
                        <h2 className='mr-5'>100% Certified Authentic</h2>
                        <Link to='/login'><h2 className='mr-2'>Login</h2></Link>
                        <h2 className='mr-2'>|</h2>
                        <Link to='/register'><h2>SignUp</h2></Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default TopBanner;