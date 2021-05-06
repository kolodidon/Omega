import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { servicesObjOne, servicesObjTwo, servicesObjThree, servicesObjFour } from './Data';

function Services() {
  return (
    <>
      <InfoSection {...servicesObjOne} />
      <Pricing />
      <InfoSection {...servicesObjTwo} />
      <InfoSection {...servicesObjThree} />
      <InfoSection {...servicesObjFour} />
    </>
  );
}

export default Services;
