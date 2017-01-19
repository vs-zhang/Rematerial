import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import Root from './root';

const root = document.getElementById('root');

function render(){
  console.log('Re-rendering');
  ReactDOM.render(<Root />, root);
}

render();
setInterval(render, 8000);

document.body.appendChild(root);
