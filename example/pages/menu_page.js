import React from 'react';
import DocumentTitle from 'react-document-title';
import { Icon, Paper } from 'rematerial';
import { Title, CodeBlock } from './shared/';
import MenuExample from './examples/menu/menu_example';
import OpenMenuExample from './examples/menu/open_menu_example';
const MenuExampleSource = require('!!raw!./examples/menu/menu_example');
const OpenMenuExampleSource = require('!!raw!./examples/menu/open_menu_example');

const MenuPage = () => {
  return (
    <DocumentTitle title="Menus">
      <div>
        <Title title="Menus" desc="Lists of clickable actions." />

        <section>
          <h3 className="example-title">1. Menu</h3>
          <OpenMenuExample />
          <CodeBlock type="javascript">
            {OpenMenuExampleSource}
          </CodeBlock>
        </section>

        <section>
          <h3 className="example-title">2. Menu with trigger</h3>
          <Paper className="docs-menu">
            <div className="docs-menu__bar">
              <MenuExample />
            </div>
            <span className="docs-menu__background" />
          </Paper>
          <CodeBlock type="javascript">
            {MenuExampleSource}
          </CodeBlock>
        </section>

      </div>
    </DocumentTitle>
  );
};

export default MenuPage;
