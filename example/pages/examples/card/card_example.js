import React from 'react';
import { Card } from 'rematerial';

const CardExample = (actions, img) => {
  return (
    <Card
      title="Welcome"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
      actions={actions}
      img={img}
    />
  )
};

export default CardExample;
