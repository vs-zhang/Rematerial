import React, { Component, PropTypes } from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Layout from './layout';
import App from './app';
import Components from './components';

import HomePage from './pages/home_page';
import ButtonPage from './pages/button_page';
import DialogPage from './pages/dialog_page';
import CardPage from './pages/card_page';
import SliderPage from './pages/slider_page';
import TogglePage from './pages/toggle_page';
import SnackbarPage from './pages/snackbar_page';
import TooltipPage from './pages/tooltip_page';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    <Route path="/components/" component={Components}>
      <IndexRedirect to="app" />
      <Route path="app" component={App}/>
      <Route path="about" component={HomePage}/>
      <Route path="button" component={ButtonPage}/>
      <Route path="dialog" component={DialogPage}/>
      <Route path="card" component={CardPage}/>
      <Route path="slider" component={SliderPage}/>
      <Route path="toggle" component={TogglePage}/>
      <Route path="snackbar" component={SnackbarPage}/>
      <Route path="tooltip" component={TooltipPage}/>
    </Route>
  </Route>
);

export default routes;
