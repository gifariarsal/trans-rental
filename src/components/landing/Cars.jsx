import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { carsData } from '../../data';
import { styles } from '../../styles';
import { IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5';

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
    const message = `Hello, I'm interested in booking or asking about the ${carName}. Could you please provide more information?`;
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
    <section id="how-it-works" className={`${styles.sectionContainer}`}>
      <h2 className={`${styles.sectionTitle} !mb-2`}>DRIVE CAR YOU LOVE</h2>

      <div className="bg-black flex items-center flex-col justify-center gap-10">
        <div className="w-full flex flex-row justify-end gap-3">
          <button className={`${styles.chevronButton}`} onClick={handleBack}>
            <IoChevronBackOutline size={20} className="text-primary" />
          </button>
          <button className={`${styles.chevronButton}`} onClick={handleNext}>
            <IoChevronForwardOutline size={20} className="text-primary" />
          </button>
        </div>
        {carsData.map(({ image, name }, index) => (
          <motion.div
            key={name}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{
              width:
                positions[positionIndexes[index]] === 'center' ? '55%' : '40%',
              position: 'absolute',
              filter:
                positions[positionIndexes[index]] === 'center'
                  ? 'none'
                  : 'brightness(20%)',
            }}
            className="flex flex-col items-center justify-center"
          >
            <img src={image} alt={name} className="rounded-[12px]" />
          </motion.div>
        ))}
        <div
          className="flex flex-col items-center justify-center gap-2 mt-10"
          style={{ visibility: 'visible' }}
        >
          <p className="text-white text-3xl font-semibold">
            {carsData[selectedIndex].name}
          </p>
          <a
            href={generateWhatsAppLink(carsData[selectedIndex].name)}
            target="_blank"
            rel="noreferrer"
            className="pulse text-white bg-primary font-semibold px-4 py-2 rounded-[20px] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cars;
