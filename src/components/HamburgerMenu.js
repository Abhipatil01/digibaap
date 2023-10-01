import React from 'react';
import Close from '../images/close.svg';
import Mustache from '../images/Mustache.svg';
import { navigate } from 'gatsby';

function NavButton({ children, onButtonClick }) {
  return (
    <button
      className="font-phudu text-white text-8xl text-left rounded-lg slide-button pl-6"
      data-text={children}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}

function HamburgerMenu({ onMenuClick }) {
  const onNavClick = (route = '') => {
    onMenuClick();
    navigate(`/${route}`);
  };

  return (
    <div className="w-full h-fit z-50 bg-gradient-to-t from-dark-orange to-orange relative overflow-y-auto">
      <div className="absolute right-8 top-6">
        <div className="cursor-pointer" onClick={onMenuClick}>
          <img src={Close} />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:pl-20 gap-10 py-20 pl-10 container mx-auto">
        <div className="grid gap-6 pr-10">
          <NavButton onButtonClick={() => onNavClick()}>Home</NavButton>
          <NavButton onButtonClick={() => onNavClick('work')}>Work</NavButton>
          <NavButton onButtonClick={() => onNavClick('services')}>
            Services
          </NavButton>
          <NavButton onButtonClick={() => onNavClick('pr-media')}>
            PR & Media
          </NavButton>
          <NavButton onButtonClick={() => onNavClick('about')}>About</NavButton>
          <NavButton onButtonClick={() => onNavClick('contact')}>
            Contact
          </NavButton>
          <NavButton onButtonClick={() => onNavClick('news-blogs')}>
            News & Blogs
          </NavButton>
        </div>
        <div className="grid place-items-center">
          <div className="flex flex-col gap-12">
            <div>
              <img src={Mustache} />
            </div>
            <span className="font-phudu text-right text-white text-4xl pr-10">
              Your Digital Godfather
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
