// @flow

import React from 'react';
import { connect } from 'react-redux';
import CarsFilterComponent from '../../components/CarsFilter';
import { fetchCars } from './CarsFilterRedux';

type Props = {
  loadCars: (query: Object) => void,
  query: { page: Number, manufacturer: string, color: string, sort: string }
};
type State = void;

class CarsFilter extends React.Component<Props, State> {
  componentDidMount() {
    const { loadCars } = this.props;

    loadCars();
  }

  componentWillReceiveProps() {}

  render() {
    return <CarsFilterComponent />;
  }
}

function mapStateToProps(state: any) {
  return {
    query: state.filter.query,
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
