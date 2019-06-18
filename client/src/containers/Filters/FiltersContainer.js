// @flow

import React from 'react';
import { connect } from 'react-redux';
import FiltersComponent from '../../components/Filters';
import { queryChange } from '../CarsFilter/CarsFilterRedux';

type Props = {
  onChange: (value: Object) => void
};

type State = void;

class Filters extends React.Component<Props, State> {
  render() {
    const { onChange } = this.props;
    return <FiltersComponent onChange={onChange} />;
  }
}

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {
    onChange: (filters: { color: string, manufacturer: string }) => dispatch(queryChange(filters)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);
