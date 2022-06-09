import React from 'react';
import {Routes, Route, NavLink } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Hot from '../../Pages/Hot/Hot';
import Regular from '../../Pages/Regular/Regular';
import './SidebarNavigation.css';
import Logo from '../../assects/images/memsLogo.png';

export const SidebarNavigation = () => {
    return (
        <>
        <div className='sidebar'>
            <div className='logo'>
                <img src={Logo} alt="logo"/>
            </div>
            <ul>
                <li>
                    <NavLink className='nav-link'  to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to="/regular">Regular</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to="/hot">Hot</NavLink>
                </li>
            </ul>
        </div>
        <div className='content'>
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/regular" element={ <Regular />} />
                <Route path="/hot" element={ <Hot />} />
            </Routes>
        </div>
        </>
    )
}