import React from 'react'
import { Link } from 'react-router-dom'


openSlideMenu = () => {
    document.getElementById('side-menu').style.width="250px"
    document.getElementById('main').style.marginLeft="250px"
}

const NavBar = () => (

    <nav class="navbar">
        <span class="open-slide">
            <a href="#" onClick={this.openSlideMenu()}>
                <svg width="30" height="30"> 
                    <path d="M0,5 30,5" stroke="#000"
                    stroke-width="5"/>
                    <path d="M0,14 30,14" stroke="#000"
                    stroke-width="5"/>
                    <path d="M0,23 30,23" stroke="#000"
                    stroke-width="5"/>

                </svg>
            </a>
        </span>

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

         <div id="side-menu" class="side-nav">
            <a href="#" class="btn-close" onClick="closeSlideMenu()">&times;</a>
            <a><Link to="/homepage" className="navbar-links">Where She Got It</Link></a>
            <a><Link to="/travel" className="navbar-links">Travel</Link></a>
            <a><Link to="/health" className="navbar-links">Health</Link></a>
            <a><Link to="/fashion" className="navbar-links">Fashion</Link></a>
            <a><Link to="/decor" className="navbar-links">Decor</Link></a>

        </div>
        <div id="main">
            <h1>Where she got it</h1>
        </div>
        
    </nav>
        
        
        

    

    // <nav className="navbar-container">
    //     <ul className="navbar-links">
    //         <li>
    //             <Link to="/homepage" className="navbar-links">Where She Got It</Link>
    //         </li>
    //         <li>
    //             <Link to="/travel" className="navbar-links">Travel</Link>
    //         </li>
    //         <li>
    //             <Link to="/health" className="navbar-links">Health</Link>
    //         </li>
    //         <li>
    //             <Link to="/fashion" className="navbar-links">Fashion</Link>
    //         </li>
    //         <li>
    //             <Link to="/decor" className="navbar-links">Decor</Link>
    //         </li>
    //     </ul>
    //     </nav>
);


export default NavBar;