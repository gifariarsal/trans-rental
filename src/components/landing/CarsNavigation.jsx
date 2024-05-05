import React from 'react';
import { styles } from '../../styles';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const CarsNavigation = ({ handleBack, handleNext, selectedIndex, totalItems }) => {
  return (
    <div className="w-full flex flex-row justify-end gap-3">
      <span className="text-white mt-2 mr-4">
        {selectedIndex + 1} / {totalItems}
      </span>
      <button className={`${styles.chevronButton}`} onClick={handleBack}>
        <IoChevronBackOutline size={20} className="text-primary" />
      </button>
      <button className={`${styles.chevronButton}`} onClick={handleNext}>
        <IoChevronForwardOutline size={20} className="text-primary" />
      </button>
    </div>
  );
};

export default CarsNavigation;
