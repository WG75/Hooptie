// @flow

import React from 'react';
import { connect } from 'react-redux';
import PaginatorComponent from '../../components/Paginator';
import { queryChange } from '../CarsFilter/CarsFilterRedux';

type Props = {
  onChange: (Object) => void,
  nextPage: number,
  prevPage: number,
  lastPage: number,
  currentPage: number,
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
  };
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {
    onChange: (page: { page: string }) => dispatch(queryChange(page)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Paginator);
