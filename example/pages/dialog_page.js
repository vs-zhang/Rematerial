import React from 'react';
import { Button, Divider } from 'rematerial';
import { Title, CodeBlock } from './shared/';
import DocumentTitle from 'react-document-title';
import DialogExample from './examples/dialog/dialog_example';
const DialogExampleSource = require('!!raw!./examples/dialog/dialog_example');

const DialogPage = () => {
  return (
    <DocumentTitle title="Dialogs">
      <div>
        <Title title="Dialogs" desc="Modal windows for dedicated user input."/>

        <section>
          <h3 className="example-title">1. Basic Dialog</h3>
          <DialogExample />
          <CodeBlock type="javascript">
            {DialogExampleSource}
          </CodeBlock>
        </section>

        <Divider />
      </div>
    </DocumentTitle>
  )
};

export default DialogPage;
