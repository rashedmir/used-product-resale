import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../../Homepage/Homepage';
import Main from '../../Main/Main';
import VintageRolex from '../../Pages/VintageRolex/VintageRolex';
import Login from '../../Pages/Login/Login'
import Register from '../../Pages/Register/Register';
import AddProducts from '../../Pages/AddProducts/AddProducts'
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Omega from '../../Pages/Omega/Omega';
import Rolex from '../../Pages/Rolex/Rolex';
import LuxuryWatches from '../../Pages/LuxuryWatches/LuxuryWatches'
import MyProducts from '../../Pages/MyProducts/MyProducts'
import MyOrders from '../../Pages/BookingModal/MyOrders';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch(`https://b612-used-products-resale-server-side-rashedmir.vercel.app/watches`)
    },
    {
        path: '/homepage',
        element: <Homepage></Homepage>,
        children: [
            {
                path: '/homepage/rolex',
                element: <Rolex></Rolex>,
                loader: () => fetch(`https://b612-used-products-resale-server-side-rashedmir.vercel.app/watches`)
            },
            {
                path: '/homepage/private/rolex',
                element: <PrivateRoute><Rolex></Rolex></PrivateRoute>,
                loader: () => fetch(`https://b612-used-products-resale-server-side-rashedmir.vercel.app/watches`)
            },
            {
                path: '/homepage/omega',
                element: <Omega></Omega>,
                loader: () => fetch(`https://b612-used-products-resale-server-side-rashedmir.vercel.app/watches`)
            },
            {
                path: '/homepage/private/omega',
                element: <PrivateRoute><Omega></Omega></PrivateRoute>,
                loader: () => fetch(`https://b612-used-products-resale-server-side-rashedmir.vercel.app/watches`)
            },
            {
                path: '/homepage/luxurywatches',
                element: <LuxuryWatches></LuxuryWatches>,
                loader: () => fetch(`https://b612-used-products-resale-server-side-rashedmir.vercel.app/watches`)
            },
            {
                path: '/homepage/private/luxurywatches',
                element: <PrivateRoute><LuxuryWatches></LuxuryWatches></PrivateRoute>,
                loader: () => fetch(`https://b612-used-products-resale-server-side-rashedmir.vercel.app/watches`)
            },
            {
                path: '/homepage/vintagerolex',
                element: <VintageRolex></VintageRolex>,
                loader: () => fetch(`https://b612-used-products-resale-server-side-rashedmir.vercel.app/watches`)
            },
            {
                path: '/homepage/private/vintagerolex',
                element: <PrivateRoute><VintageRolex></VintageRolex></PrivateRoute>,
                loader: () => fetch(`https://b612-used-products-resale-server-side-rashedmir.vercel.app/watches`)
            },
            {
                path: '/homepage/addproducts',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path: '/homepage/myproduct',
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
                loader: () => fetch(`https://b612-used-products-resale-server-side-rashedmir.vercel.app/watches`)
            },
            {
                path: '/homepage/myproduct/:id',
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
                loader: (params) => fetch(`https://b612-used-products-resale-server-side-rashedmir.vercel.app/watches/${params.id}`)
            },
            {
                path: '/homepage/myorders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
                loader: (params) => fetch(`https://b612-used-products-resale-server-side-rashedmir.vercel.app/bookings`)
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])

export default routes;