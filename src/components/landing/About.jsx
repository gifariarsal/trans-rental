import React from 'react';
import { styles } from '../../styles';
import { about } from '../../assets';
import SectionTitle from '../common/SectionTitle';

const About = () => {
  return (
    <section id="about" className={`${styles.sectionContainer}`}>
      <SectionTitle title="YOUR TRUSTED PARTNER" subtitle="ABOUT US" />
      <div className="w-full flex flex-col md:flex-row justify-center items-center mb-4 mt-8 lg:mt-0 gap-8">
        <div className="w-full md:w-1/2">
          <p className="text-white leading-loose mb-8" data-aos="fade-right">
            Trans Rental specializes in luxury and electric vehicle rentals,
            offering expertly curated travel and tour packages since 2009. Enjoy
            safe, comfortable, and unforgettable experiences across Indonesia
            and beyond.
          </p>
          <button className="bg-black text-primary font-semibold px-12 py-3 rounded-[6px] border-[1.5px] border-primary hover:bg-blackShade transition-all duration-300">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={about}
            alt="about"
            loading="lazy"
            className="w-[300px] md:w-[200px] lg:w-[300px] h-auto mx-auto"
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
