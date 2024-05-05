import React from 'react';
import { styles } from '../../styles';
import SectionTitle from '../common/SectionTitle';

const About = () => {
  return (
    <section id="about" className={`${styles.sectionContainer}`}>
      <SectionTitle title="YOUR TRUSTED PARTNER" subtitle="ABOUT" />
    </section>
  );
};

export default About;
