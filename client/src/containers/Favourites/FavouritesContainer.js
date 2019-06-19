// @flow

import React from 'react';
import { connect } from 'react-redux';
import FavouritesComponent from '../../components/Favourites';
import {
  saveToCollection,
  removeFromCollection,
  searchInCollection,
} from './FavouritesRedux';

type Props = {
  location: Object,
  onSave: (carId: string) => void,
  onRemove: (carId: string) => void,
  searchCollection: (carId: string) => void,
  isSaved: boolean
};

class Favourites extends React.Component<Props, State> {
  componentDidMount() {
    const { location, searchCollection } = this.props;
    const { pathname } = location;
    const carId = pathname.slice(6, 11);

    searchCollection(parseInt(carId, 10));
  }

  render() {
    const {
      onSave, onRemove, isSaved, car,
    } = this.props;
    return (
      <FavouritesComponent
        onSave={() => car && onSave(car.stockNumber)}
        onRemove={() => car && onRemove(car.stockNumber)}
        isSaved={isSaved}
      />
    );
  }
}

function mapStateToProps(state: any) {
  return {
    location: state.router.location,
    isSaved: state.favourites.isSaved,
    car: state.selectedCar.car,
  };
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {
    onSave: (carId: string) => dispatch(saveToCollection(carId)),
    onRemove: (carId: string) => dispatch(removeFromCollection(carId)),
    searchCollection: (carId: string) => dispatch(searchInCollection(carId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favourites);
