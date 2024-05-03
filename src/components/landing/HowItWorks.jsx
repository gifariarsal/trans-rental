import React from 'react';
import { styles } from '../../styles';
import {
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoListCircleOutline,
  IoCashOutline,
} from 'react-icons/io5';
import HowItWorksItem from './HowItWorksItem';

const HowItWorks = () => {
  const items = [
    {
      icon: <IoPhonePortraitOutline size={50} />,
      text: 'Contact our admin',
    },
    {
      icon: <IoCalendarOutline size={50} />,
      text: 'Set a schedule for rent',
    },
    {
      icon: <IoListCircleOutline size={50} />,
      text: 'Choose the package',
    },
    {
      icon: <IoCashOutline size={50} />,
      text: 'Pay the down payment',
    },
  ];
  return (
    <section id="how-it-works" className={`${styles.sectionContainer}`}>
      <h2 className="text-center mx-auto mb-4 text-4xl lg:text-5xl text-primary font-bold">
        HOW IT WORKS
      </h2>
      <div className="w-full flex flex-col md:flex-row justify-center items-center pt-12 md:gap-4 lg:gap-8">
        {items.map(({ icon, text }, index) => (
          <HowItWorksItem
            key={index}
            icon={icon}
            text={text}
            className={
              index % 2 === 0 ? 'bg-white text-black' : 'bg-primary text-white'
            }
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
