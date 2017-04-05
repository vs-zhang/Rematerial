import React, { Component, PropTypes } from 'react';
import { Divider, Collapsed } from 'rematerial';
import { Title, CodeBlock } from './shared/';
import DocumentTitle from 'react-document-title';
import ProgressLinearExample from './examples/progress/progress_linear_example';
import ProgressLinearPropsTable from './examples/progress/progress_linear_props_table';
import ProgressCircularExample from './examples/progress/progress_circular_example';
import ProgressCircularPropsTable from './examples/progress/progress_circular_props_table';
const ProgressLinearExampleSource = require('!!raw!./examples/progress/progress_linear_example');
const ProgressCircularExampleSource = require('!!raw!./examples/progress/progress_circular_example');

const ProgressPage = () => {
  return (
    <DocumentTitle title="Progress">
      <div>
        <Title title="Progress" desc="" />

        <section>
          <h3 className="example-title">1. Progress Linear</h3>
          <ProgressLinearExample />
        </section>
        <ProgressLinearPropsTable />
        <Collapsed>
          <CodeBlock type="javascript">
            {ProgressLinearExampleSource}
          </CodeBlock>
        </Collapsed>

        <section>
          <h3 className="example-title">2. Progress Circular</h3>
          <ProgressCircularExample />
        </section>
        <ProgressCircularPropsTable />
        <Collapsed>
          <CodeBlock type="javascript">
            {ProgressCircularExampleSource}
          </CodeBlock>
        </Collapsed>
      </div>
    </DocumentTitle>
  );
};

export default ProgressPage;
