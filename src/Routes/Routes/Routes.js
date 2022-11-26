import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../../Homepage/Homepage';
import Main from '../../Main/Main';
// import LuxuryWatchesMap from '../../Pages/LuxuryWatches/LuxuryWatchesMap';
import VintageRolex from '../../Pages/VintageRolex/VintageRolex';
import Login from '../../Pages/Login/Login'
import Register from '../../Pages/Register/Register';
import AddProducts from '../../Pages/AddProducts/AddProducts'
import MyProductsMap from '../../Pages/MyProducts/MyProductsMap';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
// import RolexMap from '../../Pages/Rolex/RolexMap';
// import OmegaMap from '../../Pages/Omega/OmegaMap';
import Omega from '../../Pages/Omega/Omega';
import Rolex from '../../Pages/Rolex/Rolex';
import LuxuryWatches from '../../Pages/LuxuryWatches/LuxuryWatches'
import MyProducts from '../../Pages/MyProducts/MyProducts'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
    },
    {
        path: '/homepage',
        element: <Homepage></Homepage>,
        children: [
            {
                path: '/homepage/rolex',
                element: <Rolex></Rolex>,
                loader: () => fetch(`http://localhost:5000/watches`)
            },
            {
                path: '/homepage/omega',
                element: <Omega></Omega>,
                loader: () => fetch(`http://localhost:5000/watches`)
            },
            {
                path: '/homepage/luxurywatches',
                element: <LuxuryWatches></LuxuryWatches>,
                loader: () => fetch(`http://localhost:5000/watches`)
            },
            {
                path: '/homepage/vintagerolex',
                element: <VintageRolex></VintageRolex>,
                loader: () => fetch(`http://localhost:5000/watches`)
            },
            {
                path: '/homepage/addproducts',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path:'/homepage/myproduct',
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/watches`)
            }
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