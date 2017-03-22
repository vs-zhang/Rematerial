import React, { Component, PropTypes } from 'react';
import { Divider, Button } from 'rematerial';
import { Title, CodeBlock } from './shared/';
import DocumentTitle from 'react-document-title';
import logo from '../asset/rematerial.svg';
import  HomeExample from './examples/home/home_example';
import { Link } from 'react-router';
const HomeExampleSource = require('!!raw!./examples/home/home_example');

class HomePage extends Component {
  render() {
    return (
      <DocumentTitle title="Rematerial">
        <div className="docs-home">
          <div className="docs-home__desc">
            <img src={logo} className="logo" alt="logo" />
            <p className="title"> Rematerial</p>

            <p className="lead">Some reusable material components</p>

            <div className="buttons">
              <Button type="raised"><Link to="https://github.com/vs-zhang/Rematerial" target="_blank">View on Github</Link></Button>
              <Button type="raised"><Link to="/components/">View Components</Link></Button>
            </div>
          </div>


          <div className="docs-home__examples">
            <div className="docs-home__guide">
              <p className="title">Installation</p>
              <Divider />

              <p>NPM</p>
              <p>Install rematerial and dependencies via NPM</p>
              <CodeBlock>
                npm install --save rematerial
              </CodeBlock>

              <p>Import the components you need</p>
              <div className="example-container">
                <div className="example">
                  <p>Example</p>
                  <HomeExample />
                </div>
                <CodeBlock>
                  {HomeExampleSource}
                </CodeBlock>
              </div>
            </div>
          </div>

          <div className="docs-home__features">

          </div>

          <div className="docs-home__about">

          </div>

          <div className="docs-home__likes">

          </div>

        </div>
      </DocumentTitle>
    )
  }
}

export default HomePage;
