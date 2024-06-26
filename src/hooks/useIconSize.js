import { useState, useEffect } from 'react';

const useIconSize = () => {
  const [iconSize, setIconSize] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIconSize(30);
      } else {
        setIconSize(20);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return iconSize;
};

export default useIconSize;
