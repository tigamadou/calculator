import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="pageTitle">
      Math Magicians
    </div>
    <nav className="navbar">
      <ul className="navbarMenu">
        <li className="navbarItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navbarItem">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="navbarItem">
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
