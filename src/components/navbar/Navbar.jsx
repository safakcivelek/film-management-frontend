import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Ana Sayfa</Link></li>
                <li><Link to="/search">Ara...</Link></li>
                <li><Link to="/films">Filmler</Link></li>
                <li><Link to="/aboutus">Hakkımızda</Link></li>                  
            </ul>
        </nav>
    );
}

export default Navbar;