import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const root = document.createElement('div');

function render(){
  console.log('Re-rendering');
  ReactDOM.render(<App />, root);
}

render();
setInterval(render, 8000);

document.body.appendChild(root);
