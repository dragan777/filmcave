import React from "react";
import logo from '../../logo.svg';
import {

    Link
} from "react-router-dom";
const Header = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="30" height="30" alt=""/>
                </a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;