import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavbarAll from '../Shared/Navbar/NavbarAll';
import TopBanner from '../Shared/TopBanner/TopBanner';

const Homepage = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <NavbarAll></NavbarAll>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;