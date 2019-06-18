// @flow

import React from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import FiltersComponent from '../../components/Filters';
import { fetchCars } from '../CarsFilter/CarsFilterRedux';

type Props = {
  onChange: (value: Object) => void,
  query: Object
};

type State = void;

class Filters extends React.Component<Props, State> {
  render() {
    const { onChange, query } = this.props;
    return <FiltersComponent query={query} onChange={onChange} />;
  }
}

function mapStateToProps(state: any) {
  return {
    query: qs.parse(state.router.location.search),
  };
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {
    onChange: (query: Object) => dispatch(fetchCars(query)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);
