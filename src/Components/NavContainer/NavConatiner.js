import './NavContainer.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavContainer = () => {
    return (
        <nav>
            <NavLink to='/' className='Nav'>Home</NavLink>
            <NavLink to='/state-search' className='Nav'>Search by State</NavLink>
            <NavLink to='/name-search' className='Nav'>Search by Name</NavLink>
            <NavLink to='/map' className='Nav'>Brewery Map</NavLink>
        </nav>
    )
}

export default NavContainer