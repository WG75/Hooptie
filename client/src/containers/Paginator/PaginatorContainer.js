// @flow

import React from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import PaginatorComponent from '../../components/Paginator';
import { fetchCars } from '../CarsFilter/CarsFilterRedux';

type Props = {
  onChange: Object => void,
  nextPage: number,
  prevPage: number,
  lastPage: number,
  currentPage: number,
  query: Object
};

type State = void;

class Paginator extends React.Component<Props, State> {
  render() {
    return <PaginatorComponent {...this.props} />;
  }
}

function mapStateToProps(state: Object) {
  return {
    nextPage: state.filter.nextPage,
    prevPage: state.filter.prevPage,
    lastPage: state.filter.lastPage,
    currentPage: state.filter.currentPage,
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
)(Paginator);
