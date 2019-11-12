import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './Google.auth';

const Header = () => {
    return (
        <nav className="mb-1 navbar navbar-expand-lg">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent-555"
                aria-controls="navbarSupportedContent-555"
                aria-expanded="false"
                aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">All Streams</Link>
                    </li>
                </ul>
               
                <GoogleAuth/>
            </div>
        </nav>
    );
}
export default Header