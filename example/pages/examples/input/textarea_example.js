import React from 'react';
import { Textarea } from 'rematerial';

const TextareaExample = () => {
  return (
    <Textarea
      rows="4"
      cols="50"
      label="Floating Textarea"
      floatingLabel={true}
      defaultValue="Default Textarea Value"
    />
  )
};

export default TextareaExample;
