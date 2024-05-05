import React from 'react';
import { About, Cars, Hero, Procedure, Service } from '../components';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Service />
      <Procedure />
      <Cars />
      <About />
    </>
  );
};

export default LandingPage;
