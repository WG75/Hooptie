// @flow

import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from '../../redux/index';
import carPage from '../../components/CarPage';
import Home from '../../components/Home';
import Page404 from '../../components/Page404';

type Props = void;
type State = void;

class App extends React.Component<Props, State> {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cars" component={Home} />
          <Route exact path="/cars/:id" component={carPage} />
          <Route component={Page404} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
