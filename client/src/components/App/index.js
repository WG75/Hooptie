// @flow

import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from '../../redux/index';
import CarsPage from '../CarsPage';
import carPage from '../CarPage';
import Page404 from '../Page404';

const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={CarsPage} />
      <Route exact path="/cars" component={CarsPage} />
      <Route exact path="/cars/:id" component={carPage} />
      <Route component={Page404} />
    </Switch>
  </ConnectedRouter>
);

export default App;
