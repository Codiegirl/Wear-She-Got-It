import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/fashion">Fashion</Link>
            </li>
            <li>
                <Link to="/travel">Travel</Link>
            </li>
            <li>
                <Link to="/health">Health</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
        </ul>
        </nav>
);

export default NavBar;