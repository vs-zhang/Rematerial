import React, { Component, PropTypes } from 'react';

const Inline = ({children}) => {
  return(
    <div className="docs-inline">
      {children}
    </div>
  );
};

export default Inline;
