import React from 'react';

const ProcedureItem = ({ icon, text, className = '' }) => {
  return (
    <div className="custom-shadow w-full lg:w-[250px] xl:w-[350px] flex flex-row lg:flex-col items-center justify-start lg:justify-center gap-4 xl:gap-8 mx-auto p-4 xl:p-8 rounded-2xl border-[1px] border-black/70 lg:hover:cursor-pointer lg:hover:scale-105 transition-all duration-300">
      <div
        className={`w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] flex justify-center items-center rounded-xl ${className}`}
      >
        {icon}
      </div>
      <p className="text-center text-white md:text-lg lg:text-2xl">{text}</p>
    </div>
  );
};

export default ProcedureItem;
