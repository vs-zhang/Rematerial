require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./prism.js');
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
const root = document.getElementById('root');

function render(){
  ReactDOM.render(<Root />, root);
}

render();

if (module.hot) {
  module.hot.accept('./root', () => {
    /* eslint-disable global-require */
    const NewRoot = require('./root').default;
    /* eslint-enable global-require */
    ReactDOM.render(<NewRoot />, root);
  })
}
