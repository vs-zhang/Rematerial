import React from 'react';
import { Divider } from 'rematerial';
import { Title, CodeBlock } from './shared/';
import DocumentTitle from 'react-document-title';
import SnackbarExample from './examples/snackbar/snackbar_example';
const SnackbarExampleSource = require('!!raw!./examples/snackbar/snackbar_example');

const SnackbarPage = () => {
  return (
    <DocumentTitle title="Snackbar">
      <div>
        <Title title="Snackbar" desc="Transient popup notifications." />

        <section>
          <h3 className="example-title">1. Snackbar</h3>
          <SnackbarExample />
          <CodeBlock type="javascript">
            {SnackbarExampleSource}
          </CodeBlock>
        </section>

        <Divider />
      </div>
    </DocumentTitle>
  );
};

export default SnackbarPage;
