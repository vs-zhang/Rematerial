import React, { Component, PropTypes } from 'react';
import { Button, Divider } from 'rematerial';
import { Title, Inline, CodeBlock } from './shared/';
import DocumentTitle from 'react-document-title';
import RaisedButtonExample from './examples/buttons/raised_button_example';
import FabButtonExample from './examples/buttons/fab_button_example';
import FlatButtonExample from './examples/buttons/flat_button_example';
const RaisedButtonExampleSource = require('!!raw!./examples/buttons/raised_button_example');
const FabButtonExampleSource = require('!!raw!./examples/buttons/fab_button_example');
const FlatButtonExampleSource = require('!!raw!./examples/buttons/flat_button_example');

const ButtonPage = () => {
  return (
    <DocumentTitle title="Buttons">
      <div>
        <Title title="Buttons" desc="Variations on Material Design buttons."/>

        <section>
          <h3 className="example-title">1. Raised Button</h3>
          <RaisedButtonExample />
          <CodeBlock type="javascript">
            {RaisedButtonExampleSource}
          </CodeBlock>
        </section>

        <Divider />

        <section>
          <h3 className="example-title">2. Fab Button</h3>
          <FabButtonExample />
          <CodeBlock type="javascript">
            {FabButtonExampleSource}
          </CodeBlock>
        </section>

        <Divider />

        <section>
          <h3 className="example-title">3. Flat Button</h3>
          <FlatButtonExample />
          <CodeBlock type="javascript">
            {FlatButtonExampleSource}
          </CodeBlock>
        </section>
      </div>
    </DocumentTitle>
  )
}

export default ButtonPage;
