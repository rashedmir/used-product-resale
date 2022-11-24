import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../../Homepage/Homepage';
import Main from '../../Main/Main';
import LuxuryWatches from '../../Pages/LuxuryWatches/LuxuryWatches';
import Omega from '../../Pages/Omega/Omega';
import Rolex from '../../Pages/Rolex/Rolex';
import VintageRolex from '../../Pages/VintageRolex/VintageRolex';
import Login from '../../Pages/Login/Login'

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,  
    },
    {
        path:'/homepage',
        element:<Homepage></Homepage>,
        children:[
            {
                path: '/homepage/rolex',
                element: <Rolex></Rolex>
            },
            {
                path: '/homepage/omega',
                element: <Omega></Omega>
            },
            {
                path: '/homepage/luxurywatches',
                element: <LuxuryWatches></LuxuryWatches>
            },
            {
                path: '/homepage/vintagerolex',
                element: <VintageRolex></VintageRolex>
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    }

])

export default routes;