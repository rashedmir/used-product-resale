import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../../Homepage/Homepage';
import Main from '../../Main/Main';

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,  
    },
    {
        path:'/homepage',
        element:<Homepage></Homepage>
        
    }
])

export default routes;