import React, { Component, PropTypes } from 'react';
import { Divider } from 'rematerial';
import { Title, CodeBlock } from './shared/';
import DocumentTitle from 'react-document-title';
import TooltipExample from './examples/tooltip/tooltip_example';
const TooltipExampleSource = require('!!raw!./examples/tooltip/tooltip_example');

const TooltipPage = () => {
  return (
    <DocumentTitle title="Tooltip">
      <div>
        <Title title="Tooltip" desc=""/>

        <section>
          <h3 className="example-title">1. Tooltip</h3>
          <TooltipExample />
          <CodeBlock type="javascript">
            {TooltipExampleSource}
          </CodeBlock>
        </section>

        <Divider />
      </div>
    </DocumentTitle>
  )
};

export default TooltipPage;
