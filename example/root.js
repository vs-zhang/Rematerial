import React, { Component, PropTypes } from 'react';
import { Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router';
import routes from './routers';
import './app.css';

class Root extends Component {
  render() {
    return (
      <Router
        history={browserHistory}
        routes={routes}
      />
    )
  }
}

export default Root;
