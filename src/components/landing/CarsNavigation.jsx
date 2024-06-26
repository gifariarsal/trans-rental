import React from 'react';
import { styles } from '../../styles';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import useIconSize from '../../hooks/useIconSize';

const CarsNavigation = ({
  handleBack,
  handleNext,
  selectedIndex,
  totalItems,
}) => {
  const iconSize = useIconSize();
  return (
    <div className="w-full flex flex-row justify-end gap-3">
      <span className="text-white xl:text-2xl mt-2 xl:mt-3 mr-4">
        {selectedIndex + 1} / {totalItems}
      </span>
      <button
        className={`${styles.chevronButton} mb-[170px] lg:mb-[280px] xl:mb-[420px]`}
        onClick={handleBack}
        title="Back"
        aria-label="Back to previous car"
      >
        <IoChevronBackOutline size={iconSize} className="text-primary" />
      </button>
      <button
        className={`${styles.chevronButton} mb-[170px] lg:mb-[280px] xl:mb-[420px]`}
        onClick={handleNext}
        title="Next"
        aria-label="Next car"
      >
        <IoChevronForwardOutline size={iconSize} className="text-primary" />
      </button>
    </div>
  );
};

export default CarsNavigation;
