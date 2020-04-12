import logo from '../../logo.svg';
import React, { useState }  from "react"
import {

    Link
} from "react-router-dom";
const Header = (props) => {
    const [toggle, setToggle] = useState(false);
    const onClick = () =>{
        setToggle(!toggle);
    };
    return (
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color">
            <div className='container'>
            <a className="navbar-brand" href="#">FILMCAVE</a>
            <button onClick={onClick} className="navbar-toggler" type="button" data-toggle="collapse"
                     aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={toggle ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Search
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/discover">Discover</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto nav-flex-icons">
                    <li className="nav-item">
                        <Link to="/favorites" className="nav-link waves-effect waves-light">
                            <i className="fas fa-star"></i>
                            Favorites
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/watchlist' className="nav-link waves-effect waves-light">
                            <i className="fas fa-clock"></i>
                            Watchlist
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );

};

export default Header;