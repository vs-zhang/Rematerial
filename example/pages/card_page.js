import React, { Component, PropTypes } from 'react';
import { Card, Button } from 'rematerialize';
import WelcomeImg from '../asset/welcome_card.jpg';

class CardPage extends Component {
  render() {
    const cardActions = [
      <Button>GET STARTED</Button>,
    ];

    return (
      <div>
        <Card
          title="Welcome"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
          actions={cardActions}
          img={WelcomeImg}
        />
      </div>
    )
  }
}

export default CardPage;
