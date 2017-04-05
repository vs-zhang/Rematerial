import React, { Component, PropTypes } from 'react';
import { Divider, Collapsed } from 'rematerial';
import { Title, CodeBlock } from './shared/';
import DocumentTitle from 'react-document-title';
import FabToolbarExample from './examples/fab_toolbar/fab_toolbar_example';
import FabToolbarPropsTable from './examples/fab_toolbar/fab_toolbar_props_table';
const FabToolbarExampleSource = require('!!raw!./examples/fab_toolbar/fab_toolbar_example');

const FabToolbarPage = () => {
  return (
    <DocumentTitle title="Fab Toolbar">
      <div>
        <Title title="Fab Toolbar" desc="" />

        <section>
          <h3 className="example-title">1. Fab Toolbar</h3>
          <FabToolbarExample />
        </section>

        <Collapsed>
          <CodeBlock type="javascript">
            {FabToolbarExampleSource}
          </CodeBlock>
        </Collapsed>

        <FabToolbarPropsTable />
      </div>
    </DocumentTitle>
  );
};

export default FabToolbarPage;
