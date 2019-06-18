// @flow

import React from 'react';
import { connect } from 'react-redux';
import Select from '../../components/Select';
import { queryChange } from '../CarsFilter/CarsFilterRedux';

type Props = {
  onChange: (value: string) => void,
  className: string
};

type State = void;

class Sort extends React.Component<Props, State> {
  render() {
    const { onChange, className } = this.props;
    return (
      <Select
        className={className}
        onChange={onChange}
        options={[
          { label: 'Mileage - Ascending', value: 'Mileage - Ascending' },
          { label: 'Mileage - Descending', value: 'Mileage - Descending' },
        ]}
        withLabel
        label="sort by"
      />
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {
    onChange: (sort: { sort: string }) => dispatch(queryChange({ sort })),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sort);
