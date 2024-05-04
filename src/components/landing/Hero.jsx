import React from 'react';
import { styles } from '../../styles';
import { hero } from '../../assets';
import CirleButton from '../common/CircleButton';

const Hero = () => {
  return (
    <section
      id="hero"
      className={`${styles.sectionContainer} min-h-[calc(100vh-80px)] !py-10`}
    >
      <div className="w-full h-full flex flex-col justify-center items-end gap-12">
        <div className="w-full h-[40%] flex justify-between items-center">
          <div className="w-[50%]">
            <h1 className={`text-4xl lg:text-5xl text-white font-bold`}>
              MAKE <span className="text-primary">YOUR TRIP</span> EASIER{' '}
              <span className="text-primary">.</span>
            </h1>
          </div>
          <div className="w-[50%] flex justify-center items-center gap-8">
            <div className="w-[50%]">
              <p className="text-white">
                Experience luxury and comfort with our luxury car rental
                services
              </p>
            </div>
            <div className="w-[50%] flex justify-center">
              <CirleButton />
            </div>
          </div>
        </div>
        <div className="w-full h-[60%]">
          <img src={hero} alt="hero" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
