// @flow

import React from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import CarsFilterComponent from '../../components/CarsFilter';
import { fetchCars } from './CarsFilterRedux';

type Props = {
  loadCars: (query: Object) => void,
  query: { page: number, manufacturer: string, color: string, sort: string }
};
type State = void;

class CarsFilter extends React.Component<Props, State> {
  componentDidMount() {
    const { loadCars, query } = this.props;

    loadCars(query);
  }


  render() {
    return <CarsFilterComponent />;
  }
}

function mapStateToProps(state: any) {
  return {
    query: qs.parse(state.router.location.search),
  };
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {
    loadCars: (query: Object) => dispatch(fetchCars(query)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarsFilter);
