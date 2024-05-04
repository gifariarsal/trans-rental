import React from 'react';
import { styles } from '../../styles';
import { whatWeOffer } from '../../assets';
import '../../styles/ServiceTextEffect.css';

const Service = () => {
  return (
    <section id="service" className={`${styles.sectionContainer}`}>
      <h2 className={`${styles.sectionTitle}`}>WHAT WE OFFER</h2>
      <div className="logo-container">
        <img src={whatWeOffer} alt="Car Rental" id="logo-image" />
        <p id="page-logo">
          We provide car rental for daily, monthly, and yearly periods. We also
          ready to pick up and drop off passengers from airports, seaports,
          hotels, or resorts.
        </p>
      </div>
    </section>
  );
};

export default Service;
