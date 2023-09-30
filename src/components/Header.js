import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/logo.svg';
import HamburgerIcon from '../images/hamburger-icon.svg';

function Header() {
  return (
    <header className="bg-white py-6 fixed top-0 z-10 w-full px-8">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/">
          <img src={Logo} alt="DigiBaap Logo" className="cursor-pointer" />
        </Link>
        <img src={HamburgerIcon} alt="Menu" className="cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
