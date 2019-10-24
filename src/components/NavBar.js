import React from 'react'
import { Link } from 'react-router-dom'





const NavBar = () => (
    <header className="navbar-container">
        <nav className="navbar-navigation">
            <div></div>
            <div className="navbar-logo"><a href="/">Where She Got It</a></div>
            <div className="spacer"/>{/*to create space between the logo and links*/}
            <div className="navbar-navigation-links">
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
            </div>
        </nav>
    </header>
    
);


export default NavBar;


{/* <nav className="navbar-container">
        <ul className="navbar-links">
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
        </nav>*/}