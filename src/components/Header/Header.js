import React from "react";

import './Header.scss';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to='/' >Home</Link>
      <Link to='/catalogue' >Catalogue</Link>
      <Link to='/contacts' >Contacts</Link>
      <Link to='/adminpanel' >Admin Panel</Link>
    </div>
  )
};

export default Header;