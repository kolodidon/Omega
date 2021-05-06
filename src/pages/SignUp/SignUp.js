import React from 'react';
import { InfoSection } from '../../components';
import { signInObjOne, signInObjThree } from './Data';

function SignUp() {
  return (
    <>
      <InfoSection {...signInObjOne} />
      <InfoSection {...signInObjThree} />
    </>
  );
}

export default SignUp;