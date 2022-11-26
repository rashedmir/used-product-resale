import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../../Homepage/Homepage';
import Main from '../../Main/Main';
import LuxuryWatchesMap from '../../Pages/LuxuryWatches/LuxuryWatchesMap';
import VintageRolex from '../../Pages/VintageRolex/VintageRolex';
import Login from '../../Pages/Login/Login'
import Register from '../../Pages/Register/Register';
import AddProducts from '../../Pages/AddProducts/AddProducts'
import MyProductsMap from '../../Pages/MyProducts/MyProductsMap';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RolexMap from '../../Pages/Rolex/RolexMap';
import OmegaMap from '../../Pages/Omega/OmegaMap';


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
                path: '/homepage/rolexmap',
                element: <RolexMap></RolexMap>,
                loader: () => fetch(`http://localhost:5000/watches`)
            },
            {
                path: '/homepage/omegamap',
                element: <OmegaMap></OmegaMap>,
                loader: () => fetch(`http://localhost:5000/watches`)
            },
            {
                path: '/homepage/luxurywatchesmap',
                element: <LuxuryWatchesMap></LuxuryWatchesMap>,
                loader: () => fetch(`http://localhost:5000/watches`)
            },
            {
                path: '/homepage/vintagerolexmap',
                element: <VintageRolex></VintageRolex>
            },
            {
                path: '/homepage/addproducts',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path:'/homepage/myproductmap',
                element: <PrivateRoute><MyProductsMap></MyProductsMap></PrivateRoute>,
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