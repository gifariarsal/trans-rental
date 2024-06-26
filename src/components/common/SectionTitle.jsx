import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mx-auto mb-4 md:mb-10" data-aos="fade-down">
      <p className="text-lg lg:text-xl xl:text-3xl xl:tracking-widest text-white/60 font-bold mb-2">
        {subtitle}
      </p>
      <h2 className="text-4xl lg:text-5xl xl:text-7xl text-primary font-bold">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
