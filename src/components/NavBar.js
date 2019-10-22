import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <nav className="navbar-container">
        <ul className="navbar-links">
            <li>
                <Link to="/fashion" className="navbar-links">Fashion</Link>
            </li>
            <li>
                <Link to="/travel" className="navbar-links">Travel</Link>
            </li>
            <li>
                <Link to="/health" className="navbar-links">Health</Link>
            </li>
            <li>
                <Link to="/home" className="navbar-links">Home</Link>
            </li>
        </ul>
        </nav>
);

export default NavBar;