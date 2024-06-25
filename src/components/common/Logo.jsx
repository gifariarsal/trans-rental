import React from 'react';
import { logo } from '../../assets';
import { Link } from 'react-router-dom';

const Logo = ({ onClick }) => {
  return (
    <Link to="/" onClick={onClick}>
      <img src={logo} alt="logo" className="w-[150px] lg:w-[200px] xl:w-[300px]" />
    </Link>
  );
};

export default Logo;
