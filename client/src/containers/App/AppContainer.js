// @flow

import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../components/Home';

type Props = void;
type State = void;
class App extends React.Component<Props, State> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
        </Switch>
      </BrowserRouter>
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
