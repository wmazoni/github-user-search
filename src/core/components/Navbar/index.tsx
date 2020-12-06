import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="main-nav">
            <Link to="/" className = "navbar-title" >
            <a>Bootcamp Devsuperior</a>
            </Link>

    </nav>
)

export default Navbar;