import React from 'react'

const HowItWorksItem = ({ icon, text, className = '' }) => {
  return (
    <div
      className="w-full md:w-[250px] flex flex-row md:flex-col items-center justify-start md:justify-center gap-4 mx-auto p-4 rounded-2xl border-[1px] border-black/70 md:hover:cursor-pointer md:hover:scale-105 transition-all duration-300"
      style={{
        boxShadow:
          '-3px -3px 12px 0 rgba(236, 236, 236, 0.09), 3px 3px 12px 0 rgba(0, 0, 0, 0.59)',
      }}
    >
      <div
        className={`w-[80px] h-[80px] flex justify-center items-center rounded-xl ${className}`}
      >
        {icon}
      </div>
      <p className="text-center text-white md:text-lg">{text}</p>
    </div>
  );
}

export default HowItWorksItem