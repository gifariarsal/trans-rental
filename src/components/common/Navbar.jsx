import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navItems } from '../../data';
import Logo from './Logo';
import '../../styles/Navbar.css';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fungsi untuk mengubah item menjadi format link yang sesuai
  const formatLinkIdentifier = (item) => {
    return item.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <header className="w-full h-[80px] bg-transparent relative flex justify-between items-center px-4 md:px-8">
      <Logo onClick={() => setIsMenuOpen(false)} />
      <nav className="bg-inherit">
        <div className="hidden md:flex justify-between items-center md:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              to={formatLinkIdentifier(item)}
              spy={true}
              smooth={true}
              className="text-white font-medium cursor-pointer hover:text-primary transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
        <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : 'closed'}`}>
        {navItems.map((item) => (
          <div key={item} className="cursor-pointer">
            <Link
              to={formatLinkIdentifier(item)}
              spy={true}
              smooth={true}
              onClick={toggleMenu}
              className="text-white font-medium"
            >
              {item}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
