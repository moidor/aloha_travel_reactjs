import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavBar = props => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 fixed-top">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/home">Aloha Travel</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/places">Lieux</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/account">Mon compte</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">Admin</NavLink>
                    </li>
                </ul>
                <span className="badge badge-pill badge-secondary">
                {props.totalPlaces}
                </span>
                </div>
            </nav>
     );
}
 
export default NavBar;