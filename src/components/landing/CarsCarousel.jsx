import React from 'react'
import { carsData } from '../../data';
import { motion } from 'framer-motion';

const CarsCarousel = ({ positions, positionIndexes, selectedIndex, imageVariants, generateWhatsAppLink }) => {
  return (
    <>
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
          <img src={image} alt={name} className="mb-4" />
        </motion.div>
      ))}
      <div
        className="flex flex-col items-center justify-center gap-2 mt-4"
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
    </>
  );
}

export default CarsCarousel