import React, { useEffect, useState } from 'react';
import { styles } from '../../styles';
import {
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoListCircleOutline,
  IoCashOutline,
} from 'react-icons/io5';
import ProcedureItem from './ProcedureItem';
import SectionTitle from '../common/SectionTitle';

const Procedure = () => {
  const [iconSize, setIconSize] = useState(50);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleChange = (event) => {
      setIconSize(event.matches ? 30 : 50);
    };

    mediaQuery.addEventListener('change', handleChange);
    handleChange(mediaQuery);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const items = [
    {
      icon: <IoPhonePortraitOutline size={iconSize} />,
      text: 'Contact our admin',
    },
    {
      icon: <IoCalendarOutline size={iconSize} />,
      text: 'Set a schedule for rent',
    },
    {
      icon: <IoListCircleOutline size={iconSize} />,
      text: 'Choose the package',
    },
    {
      icon: <IoCashOutline size={iconSize} />,
      text: 'Pay the down payment',
    },
  ];
  return (
    <section id="procedure" className={`${styles.sectionContainer} xl:py-36`}>
      <SectionTitle title="HOW IT WORKS" subtitle="PROCEDURE" />
      <div
        className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {items.map(({ icon, text }, index) => (
          <ProcedureItem
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

export default Procedure;
