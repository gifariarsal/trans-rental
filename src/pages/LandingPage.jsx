import React from 'react';
import {
  About,
  Cars,
  FrequentlyAQ,
  Hero,
  Procedure,
  Service,
  Testimonials,
} from '../components';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Service />
      <Procedure />
      <Cars />
      <About />
      <Testimonials />
      <FrequentlyAQ />
    </>
  );
};

export default LandingPage;
