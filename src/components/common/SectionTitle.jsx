import React from 'react';
import { styles } from '../../styles';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className={`${styles.sectionHeader}`}>
      <p className={`${styles.sectionSubtitle}`}>{subtitle}</p>
      <h2 className={`${styles.sectionTitle}`}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
