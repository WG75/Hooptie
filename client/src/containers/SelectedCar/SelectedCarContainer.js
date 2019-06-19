// @flow

import React from 'react';
import { connect } from 'react-redux';
import SelectedCarComponent from '../../components/SelectedCar';
import { fetchCar } from './SelectedCarRedux';

type Props = {
  location: Object,
  loadCar: (carId: string) => void,
  loading: boolean,
  car: Object,
};

type State = void

class SelectedCar extends React.Component<Props, State> {
  componentDidMount() {
    const { location, loadCar } = this.props;
    const { pathname } = location;
    const carId = pathname.slice(6, 11);

    loadCar(carId);
  }

  render() {
    const { car, loading } = this.props;
    return (
      <SelectedCarComponent
        car={car}
        isLoading={loading}
      />
    );
  }
}

function mapStateToProps(state: Object) {
  return {
    location: state.router.location,
    loading: state.selectedCar.loading,
    car: state.selectedCar.car,
  };
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {
    loadCar: (carId: string) => dispatch(fetchCar(carId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectedCar);
