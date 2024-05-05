import React from 'react';
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
    <section id="procedure" className={`${styles.sectionContainer}`}>
      <SectionTitle title="HOW IT WORKS" subtitle="PROCEDURE" />
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-4 lg:gap-8">
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
