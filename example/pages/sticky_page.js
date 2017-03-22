import React, { Component, PropTypes } from 'react';
import { Divider } from 'rematerial';
import { Title, CodeBlock } from './shared/';
import DocumentTitle from 'react-document-title';
import StickyExample from './examples/sticky/sticky_example';
const StickyExampleSource = require('!!raw!./examples/sticky/sticky_example');

const StickyPage = () => {
  return (
    <DocumentTitle title="Sticky">
      <div>
        <Title title="Sticky" desc=""/>

        <section>
          <h3 className="example-title">1. Sticky</h3>
          <StickyExample />
          <CodeBlock type="javascript">
            {StickyExampleSource}
          </CodeBlock>
        </section>

        <Divider />
      </div>
    </DocumentTitle>
  )
};

export default StickyPage;
