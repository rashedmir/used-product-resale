import React from 'react';
import { Outlet } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <h2>home</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Homepage;