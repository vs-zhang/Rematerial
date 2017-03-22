import React from 'react';
import { Button, Divider } from 'rematerial';
import { Title, CodeBlock } from './shared/';
import DocumentTitle from 'react-document-title';
import WelcomeImg from '../asset/welcome_card.jpg';
import CardExample from './examples/card/card_example';
const CardExampleSource = require('!!raw!./examples/card/card_example');

const CardPage = () => {
  const cardActions = [
    <Button>GET STARTED</Button>,
  ];

  return (
    <DocumentTitle title="Cards">
      <div>
        <Title title="Cards" desc="Self-contained pieces of paper with data."/>

        <section>
          <h3 className="example-title">1. Basic Card</h3>
          {CardExample(cardActions, WelcomeImg)}
          <CodeBlock type="javascript">
            {CardExampleSource}
          </CodeBlock>
        </section>

        <Divider />
      </div>
    </DocumentTitle>
  )
};

export default CardPage;
