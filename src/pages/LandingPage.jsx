import React from 'react';
import {
  About,
  Cars,
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
    </>
  );
};

export default LandingPage;
