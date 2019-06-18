// @flow

import React from 'react';
import { connect } from 'react-redux';
import FilterResultsComponent from '../../components/FilterResults';

type Props = {
  cars: Array<Object>,
  loading: boolean,
  totalPages: number
};

type State = void;

class FilterResults extends React.Component<Props, State> {
  render() {
    const { cars, loading, totalPages } = this.props;
    return <FilterResultsComponent cars={cars} loading={loading} totalPages={totalPages} />;
  }
}

function mapStateToProps(state: Object) {
  return {
    cars: state.filter.cars,
    loading: state.filter.loading,
    totalPages: state.filter.lastPage,
  };
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterResults);
