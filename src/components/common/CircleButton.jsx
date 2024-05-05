import React from 'react';
import { IoCall } from 'react-icons/io5';

const CircleButton = () => {
  return (
    <a
      href="https://wa.me/+6282168683898"
      target="_blank"
      rel="noreferrer"
      className="pulse btn-bg text-white flex flex-col justify-center items-center font-semibold w-[110px] h-[110px] rounded-full p-3 hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      Book Now
      <IoCall size={20} />
    </a>
  );
};

export default CircleButton;
