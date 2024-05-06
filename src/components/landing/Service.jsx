import React from 'react';
import { styles } from '../../styles';
import { whatWeOffer } from '../../assets';
import '../../styles/ServiceTextEffect.css';
import SectionTitle from '../common/SectionTitle';

const Service = () => {
  return (
    <section id="service" className={`${styles.sectionContainer}`}>
      <SectionTitle title="WHAT WE OFFER" subtitle="SERVICES" />
      <div className="logo-container" data-aos="fade-up">
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
