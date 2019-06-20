// @flow

import { connect } from 'react-redux';
import qs from 'query-string';
import PaginatorComponent from '../../components/Paginator';
import { fetchCars } from '../CarsFilter/CarsFilterRedux';


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
)(PaginatorComponent);
