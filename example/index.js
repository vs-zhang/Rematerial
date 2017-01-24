import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
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
