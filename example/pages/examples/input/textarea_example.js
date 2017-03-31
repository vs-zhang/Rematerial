import React from 'react';
import { Textarea } from 'rematerial';

const TextareaExample = () => {
  return (
    <Textarea
      rows="4"
      cols="20"
      label="Floating Textarea"
      defaultValue="Default Textarea Value"
      floatingLabel
    />
  );
};

export default TextareaExample;
