// @flow

import React from 'react';
import { connect } from 'react-redux';
import FavouritesComponent from '../../components/Favourites';
// import { } from './FavouritesReducer';

type Props = {
//   onChange: (value: Object) => void,
//   query: Object
};


class Favourites extends React.Component<Props, State> {
  render() {
    // const {} = this.props;
    return <FavouritesComponent />;
  }
}

function mapStateToProps(state: any) {
  return {
    // selectedCar: state.selectedCar.id,
    // isSaved: state.favourites.isSaved,
  };
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {
    // saveToCollection: (carId: string) => dispatch()
    // removeFromCollection: (carId: string) => dispatch()
    // searchInCollection: (carId: string) => dispatch()
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favourites);
