import React from 'react';

const Title = ({title, desc}) => {
  return (
    <div className="docs-page__title">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
};

export default Title;
