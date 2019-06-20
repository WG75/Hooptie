// @flow

import { connect } from 'react-redux';
import qs from 'query-string';
import { fetchCars } from '../CarsFilter/CarsFilterRedux';
import Sort from '../../components/Sort';


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
)(Sort);
