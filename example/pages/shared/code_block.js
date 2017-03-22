import React, { Component, PropTypes } from 'react';
import { PrismCode } from 'react-prism';

const CodeBlock = ({children}) => {
  return (
    <pre>
      <PrismCode className="language-jsx">
        {children}
      </PrismCode>
    </pre>
  );
};

export default CodeBlock;
