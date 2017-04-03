import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Divider, Collapsed } from 'rematerial';
import { Title, CodeBlock } from './shared/';
import FabSpeedDialExample from './examples/fab_speed_dial/fab_speed_dial_example';
import FabSpeedDialPropsTable from './examples/fab_speed_dial/fab_speed_dial_props_table';
const FabSpeedDialExampleSource = require('!!raw!./examples/fab_speed_dial/fab_speed_dial_example');

const FabSpeedDialPage = () => {
  return (
    <DocumentTitle title="Fab Speed Dial">
      <div>
        <Title title="Fab Speed Dial" desc="" />

        <section>
          <h3 className="example-title">1. Fab Speed Dial</h3>
          <FabSpeedDialExample />
        </section>

        <Collapsed>
          <CodeBlock type="javascript">
            {FabSpeedDialExampleSource}
          </CodeBlock>
        </Collapsed>

        <FabSpeedDialPropsTable />
      </div>
    </DocumentTitle>
  );
};

export default FabSpeedDialPage;
