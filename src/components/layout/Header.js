import React from "react";
import logo from '../../logo.svg';
const Header = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="30" height="30" alt=""/>
                </a>
            </div>
        </nav>
    );
};

export default Header;