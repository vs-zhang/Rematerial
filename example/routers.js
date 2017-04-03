import React, { Component, PropTypes } from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Layout from './layout';
import Components from './components';

import App from './pages/app';
import HomePage from './pages/home_page';
import ButtonPage from './pages/button_page';
import DialogPage from './pages/dialog_page';
import CardPage from './pages/card_page';
import SnackbarPage from './pages/snackbar_page';
import TooltipPage from './pages/tooltip_page';
import InputPage from './pages/input_page';
import DatePickerPage from './pages/datepicker_page';
import StickyPage from './pages/sticky_page';
import IconPage from './pages/icon_page';
import ChartPage from './pages/chart_page';
import CollapsedPage from './pages/collapsed_page';
import VideoPlayerPage from './pages/video_player_page';
import MenuPage from './pages/menu_page';
import FabSpeedDialPage from './pages/fab_speed_dial_page';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="/components/" component={Components}>
      <IndexRedirect to="charts" />
      <Route path="buttons" component={ButtonPage} />
      <Route path="dialogs" component={DialogPage} />
      <Route path="cards" component={CardPage} />
      <Route path="snackbar" component={SnackbarPage} />
      <Route path="tooltip" component={TooltipPage} />
      <Route path="inputs" component={InputPage} />
      <Route path="date_picker" component={DatePickerPage} />
      <Route path="sticky" component={StickyPage} />
      <Route path="icons" component={IconPage} />
      <Route path="charts" component={ChartPage} />
      <Route path="collapsed" component={CollapsedPage} />
      <Route path="video_player" component={VideoPlayerPage} />
      <Route path="menus" component={MenuPage} />
      <Route path="fab_speed_dial" component={FabSpeedDialPage} />
    </Route>
  </Route>
);

export default routes;
