import React, { useState } from 'react';
import { styles } from '../../styles';
import CarsNavigation from './CarsNavigation';
import CarsCarousel from './CarsCarousel';
import SectionTitle from '../common/SectionTitle';

const Cars = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const newIndexes = prevIndexes.map((index) => (index + 1) % 6);
      setSelectedIndex(newIndexes.indexOf(0));
      return newIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const newIndexes = prevIndexes.map((index) => (index + 5) % 6);
      setSelectedIndex(newIndexes.indexOf(0));
      return newIndexes;
    });
  };

  const generateWhatsAppLink = (carName) => {
    const message = `Hello, I'm interested in booking and/or asking about the ${carName}. Could you please provide more information?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/+6282168683898?text=${encodedMessage}`;
  };

  const positions = ['center', 'left1', 'left', 'back', 'right', 'right1'];
  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-50%', scale: 0.7, zIndex: 3 },
    left: { x: '-90%', scale: 0.5, zIndex: 2 },
    right: { x: '90%', scale: 0.5, zIndex: 1 },
    right1: { x: '50%', scale: 0.7, zIndex: 3 },
    back: { x: '50%', scale: 0.1, zIndex: -1 },
  };

  return (
    <section id="cars" className={`${styles.sectionContainer}`}>
      <SectionTitle title="DRIVE CAR YOU LOVE" subtitle="CARS" />
      <div className="bg-black flex items-center flex-col justify-center gap-10">
        <CarsNavigation handleBack={handleBack} handleNext={handleNext} />
        <CarsCarousel
          {...{
            positions,
            positionIndexes,
            selectedIndex,
            imageVariants,
            generateWhatsAppLink,
          }}
        />
      </div>
    </section>
  );
};

export default Cars;
