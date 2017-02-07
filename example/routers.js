import React, { Component, PropTypes } from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Layout from './layout';
import Components from './components';

import App from './pages/app';
import HomePage from './pages/home_page';
import ButtonPage from './pages/button_page';
import DialogPage from './pages/dialog_page';
import CardPage from './pages/card_page';
import SliderPage from './pages/slider_page';
import TogglePage from './pages/toggle_page';
import SnackbarPage from './pages/snackbar_page';
import TooltipPage from './pages/tooltip_page';
import InputPage from './pages/input_page';
import DatePickerPage from './pages/datepicker_page';
import StickyPage from './pages/sticky_page';
import IconPage from './pages/icon_page';
import ChartPage from './pages/chart_page';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    <Route path="/components/" component={Components}>
      <IndexRedirect to="app" />
      <Route path="app" component={App}/>
      <Route path="button" component={ButtonPage}/>
      <Route path="dialog" component={DialogPage}/>
      <Route path="card" component={CardPage}/>
      <Route path="slider" component={SliderPage}/>
      <Route path="toggle" component={TogglePage}/>
      <Route path="snackbar" component={SnackbarPage}/>
      <Route path="tooltip" component={TooltipPage}/>
      <Route path="input" component={InputPage}/>
      <Route path="date_picker" component={DatePickerPage}/>
      <Route path="sticky" component={StickyPage}/>
      <Route path="icon" component={IconPage}/>
      <Route path="chart" component={ChartPage}/>
    </Route>
  </Route>
);

export default routes;
