import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/logo.svg';
import HamburgerIcon from '../images/hamburger-icon.svg';
import HamburgerMenu from './HamburgerMenu';
import CallMeBack from './CallMeBack';

function Header({}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuOpenHandler = () => setIsOpen((prev) => !prev);

  React.useEffect(() => {
    return () => {
      console.log('Unmounted');
    };
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      lockBodyScroll();
      return;
    }
    unlockBodyScroll();
  }, [isOpen]);

  const lockBodyScroll = () => {
    document.body.setAttribute(
      'style',
      'overflow: hidden; position: fixed; width: 100%;'
    );
  };

  const unlockBodyScroll = () => {
    document.body.setAttribute('style', 'overflow: visible; position: static;');
  };

  return (
    <header className="bg-white py-6 fixed top-0 z-10 w-full px-8">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/">
          <img src={Logo} alt="DigiBaap Logo" className="cursor-pointer" />
        </Link>
        <img
          src={HamburgerIcon}
          alt="Menu"
          className="cursor-pointer"
          onClick={menuOpenHandler}
        />
      </div>
      <div
        className={`absolute top-0 left-0 z-40 w-full h-screen overflow-y-auto ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <HamburgerMenu onMenuClick={menuOpenHandler} />
      </div>
      <CallMeBack />
    </header>
  );
}

export default Header;
