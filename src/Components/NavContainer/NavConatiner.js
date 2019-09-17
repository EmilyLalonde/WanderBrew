import './NavContainer.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavContainer = () => {
    return (
        <nav>
            <h1 className="site-header">WanderBrew</h1>
            <div className="overlay">
            <label for="toggle"></label>
            </div>
            <input type="checkbox" id="toggle" name="toggle" />
            <div className="verticalNav">
            <NavLink to='/' className='Nav'>Home</NavLink>
            <NavLink to='/state-search' className='Nav'>Search Brewery by State</NavLink>
            <NavLink to='/name-search' className='Nav'>Search Brewery by Name</NavLink>
            <NavLink to='/map' className='Nav'>Brewery Map</NavLink>
            </div>
        </nav>
    )
}

export default NavContainer