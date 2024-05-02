import React from 'react';

const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden hover:bg-white/10 p-2 py-4 rounded-full transition-all duration-300 bg-red"
      aria-label="hamburger menu"
    >
      <span
        className={`bg-primary transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
          isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
        }`}
      ></span>
      <span
        className={`bg-primary transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></span>
      <span
        className={`bg-primary transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
          isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
