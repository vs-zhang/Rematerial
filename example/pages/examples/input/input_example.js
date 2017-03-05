import React from 'react';
import { Input } from 'rematerial';

const BasicInput = () => {
  return (
    <div>
      <Input label=" Basic Input " defaultValue=" Basic Input " />
      <br />
      <Input label=" Floating Label... " floatingLabel={true} />
    </div>
  )
};

export default BasicInput;
