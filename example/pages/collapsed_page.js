import React, { Component, PropTypes } from 'react';
import { Divider } from 'rematerial';
import { Title, CodeBlock } from './shared/';
import DocumentTitle from 'react-document-title';
import CollapsedExample from './examples/collapsed/collapsed_example';
const CollapsedExampleSource = require('!!raw!./examples/collapsed/collapsed_example');

const CollapsedPage = () => {
  return (
    <DocumentTitle title="Collapsed">
      <div>
        <Title title="Collapsed" desc=""/>

        <section>
          <h3 className="example-title">1. Collapsed</h3>
          <CollapsedExample  />
          <CodeBlock type="javascript">
            {CollapsedExampleSource}
          </CodeBlock>
        </section>

        <Divider />
      </div>
    </DocumentTitle>
  )
};

export default CollapsedPage;
