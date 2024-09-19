import React from 'react';
import './Navbar.css'; // Add your styles here

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                Midnight Burst
            </div>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Results</li>
                <li>Meet The Team</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
