// @flow

import { connect } from 'react-redux';
import FilterResultsComponent from '../../components/FilterResults';

function mapStateToProps(state: Object) {
  return {
    cars: state.filter.cars,
    loading: state.filter.loading,
    totalPages: state.filter.lastPage,
  };
}

export default connect(mapStateToProps)(FilterResultsComponent);
