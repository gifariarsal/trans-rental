import React, { useEffect, useState } from 'react';
import { IoCall } from 'react-icons/io5';
import useIconSize from '../../hooks/useIconSize';

const CircleButton = () => {
  const iconSize = useIconSize();

  return (
    <a
      href="https://wa.me/+6282168683898"
      target="_blank"
      rel="noreferrer"
      className="pulse btn-bg xl:text-2xl text-white flex flex-col justify-center items-center font-semibold w-[110px] h-[110px] xl:w-[180px] xl:h-[180px] rounded-full p-3 hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      Book Now
      <IoCall size={iconSize} />
    </a>
  );
};

export default CircleButton;
