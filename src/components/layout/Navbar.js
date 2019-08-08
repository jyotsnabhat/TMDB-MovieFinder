import React from 'react';
// import logo from './tmdb_icon.jpg'
import logo from './Background.png'

const Navbar = () => {
  return (
    <nav className="navbar p-0 m-0">
      <img src={logo} alt={"could not be loaded"} width="100%" className="navbar-brand mb-0 h1 mx-auto" />
    </nav>
  );
};

export default Navbar;
