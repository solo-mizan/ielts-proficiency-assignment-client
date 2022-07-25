import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-neutral text-neutral-content">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                        <li><Link to={'/dashboard'}>Dashboard</Link></li>
                        <li><Link to={'/manage-profile'}>Manage Profile</Link></li>
                    </ul>
                </div>
                <Link to={'/home'} class="btn btn-ghost normal-case text-xl">IELTS Proficiency</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                    <li><NavLink to={'/manage-profile'}>Manage Profile</NavLink></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;