import React from 'react';
// import MonCarousel from './common/monCarousel';
import './css/header.css';
import NavBar from './navBar';
//import palm_trees from '../../assets/images/palm_trees.jpg';

const Header = (props) => {

    return (
            <header>
                <NavBar />
                {/* <MonCarousel /> */}
            </header>
     );
}
 
export default Header;