import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './Google.auth';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"> <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {/* <li className="nav-item">
                        <Link to="/" className="btn nav-link">Streamy</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/" className="btn nav-link">All Streams</Link>
                    </li>
                </ul>
                <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                    <GoogleAuth/>
                </ul>
            </div>
        </nav>
    );
}
export default Header