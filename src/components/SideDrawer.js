import React from 'react'
import { Link } from 'react-router-dom'

const sideDrawer = props => (
    <nav>
        <ul>
        <li>
                <Link to="/homepage" className="navbar-links">Where She Got It</Link>
            </li>
            <li>
                <Link to="/travel" className="navbar-links">Travel</Link>
            </li>
            <li>
                <Link to="/health" className="navbar-links">Health</Link>
            </li>
            <li>
                <Link to="/fashion" className="navbar-links">Fashion</Link>
            </li>
            <li>
                <Link to="/decor" className="navbar-links">Decor</Link>
            </li>
        </ul>
    </nav>
);

export default sideDrawer;