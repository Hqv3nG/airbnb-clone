
import { AccountCircle, ExpandMore, Language, Search } from '@material-ui/icons';

import React from 'react'; 
import { Link } from 'react-router-dom';
import "./Header.css";


function Header() {
    return (
        <div className="header">
        <Link to="/">
         <img className="header__icon"
             src="https://1000marcas.net/wp-content/uploads/2020/01/Airbnb-Logo.png"></img>   
        </Link>

        

          <div className="header__center">
          <input type="text"/>
          <Search /> 
          </div>

          <div className="header__right">
          <p>Become a host</p>
          <Language />
          <ExpandMore />
          <AccountCircle  /> 
        
          </div>
        </div>
    )
}

export default Header; 
