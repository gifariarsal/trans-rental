import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navItems } from '../../data';
import { motion } from 'framer-motion';
import Logo from './Logo';
import '../../styles/Navbar.css';
import HamburgerMenu from './HamburgerMenu';

const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', stiffness: 80 },
  },
  closed: {
    opacity: 0,
    x: '-100%',
    transition: { type: 'tween', stiffness: 80 },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const formatLinkIdentifier = (item) => {
    return item.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <header className="w-full bg-transparent relative flex justify-between items-center py-4 px-4 md:px-8">
      <Logo onClick={() => setIsMenuOpen(false)} />
      <nav className="bg-inherit">
        <div className="hidden md:flex justify-between items-center md:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              offset={40}
              href={`#${formatLinkIdentifier(item)}`}
              to={formatLinkIdentifier(item)}
              spy={true}
              smooth={true}
              className="text-white xl:text-2xl font-medium cursor-pointer hover:text-primary transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
        <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
      <motion.nav
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className={`absolute w-[96%] rounded-lg custom-shadow bg-black flex flex-col gap-6 p-6 top-[77px] left-[2%] z-10`}
      >
        {navItems.map((item) => (
          <div key={item} className="cursor-pointer">
            <Link
              href={`#${formatLinkIdentifier(item)}`}
              to={formatLinkIdentifier(item)}
              spy={true}
              smooth={true}
              onClick={toggleMenu}
              className="bg-inherit text-white font-medium"
            >
              {item}
            </Link>
          </div>
        ))}
      </motion.nav>
    </header>
  );
};

export default Navbar;
