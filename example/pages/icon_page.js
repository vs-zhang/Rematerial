import React from 'react';
import { Icon } from 'rematerial';
import { Title, CodeBlock } from './shared/';
import DocumentTitle from 'react-document-title';
import IconExample from './examples/icons/icons_example';
const IconExampleSource = require('!!raw!./examples/icons/icons_example');

const IconPage = () => {
  return (
    <DocumentTitle title="Icons">
      <div>
        <Title title="Icons" desc="Material Design Icons."/>

        <section>
          <h3 className="example-title">1. Material Design Icons</h3>
          <IconExample />
          <CodeBlock type="javascript">
            {IconExampleSource}
          </CodeBlock>
        </section>
      </div>
    </DocumentTitle>
  )
};

export default IconPage;
