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
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color">
            <div className='container'>
            <a class="navbar-brand" href="#">FILMCAVE</a>
            <button onClick={onClick} class="navbar-toggler" type="button" data-toggle="collapse"
                     aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className={toggle ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Search
                            <span class="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/discover">Discover</Link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto nav-flex-icons">
                    <li class="nav-item">
                        <Link to="/favorites" className="nav-link waves-effect waves-light">
                            <i className="fas fa-star"></i>
                            Favorites
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/watchlist' class="nav-link waves-effect waves-light">
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