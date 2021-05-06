import React from 'react';
import { InfoSection } from '../../components';
import { productsObjOne, productsObjTwo, productsObjThree, productsObjFour } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...productsObjOne} />
      <InfoSection {...productsObjTwo} />
      <InfoSection {...productsObjThree} />
      <InfoSection {...productsObjFour} />
    </>
  );
}

export default Products;