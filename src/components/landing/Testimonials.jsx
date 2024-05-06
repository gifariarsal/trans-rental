import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { styles } from '../../styles';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { testimonials } from '../../data';

const Testimonials = () => {
  return (
    <section id="testimonials" className={`${styles.sectionContainer}`}>
      <SectionTitle title="WHAT OUR CUSTOMERS SAY" subtitle="TESTIMONIALS" />
      <div className="flex items-center w-full max-w-screen-xl mx-auto p-4 text-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8" data-aos="fade-up" data-aos-delay="300">
          {testimonials.map(({ quote, name }) => (
            <div
              key={name}
              className="custom-shadow p-4 lg:p-8 grid gap-4 bg-black rounded-2xl cursor-pointer"
            >
              <span className="text-primary mx-auto">
                <RiDoubleQuotesL size={35} />
              </span>
              <p className="text-white my-2">{quote}</p>
              <hr className="w-[50%] mx-auto border-white/30" />
              <p className="text-primary mt-2">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
