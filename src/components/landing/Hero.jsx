import React from 'react';
import { styles } from '../../styles';
import { hero, heroSmall } from '../../assets';
import CirleButton from '../common/CircleButton';

const Hero = () => {
  return (
    <section
      id="hero"
      className={`${styles.sectionContainer} md:min-h-[calc(100vh-80px)] !py-10`}
    >
      <div className="w-full h-full flex flex-col justify-center items-end gap-12">
        <div className="w-full h-[40%] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          <div className="w-full lg:w-[50%]">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl text-white font-bold`}>
              MAKE <span className="text-primary">YOUR TRIP</span> EASIER
              <span className="text-primary">.</span>
            </h1>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col lg:flex-row justify-center items-center gap-8">
            <div className="w-full lg:w-[50%]">
              <p className="text-white">
                Experience luxury and comfort with our luxury car rental
                services
              </p>
            </div>
            <div className="w-full md:w-[50%] flex justify-center">
              <CirleButton />
            </div>
          </div>
        </div>
        <div className="w-full h-auto">
          <picture>
            <source media="(max-width: 768px)" srcSet={heroSmall} />
            <source media="(min-width: 769px)" srcSet={hero} />
            <img src={hero} className="mx-auto" alt="hero" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
