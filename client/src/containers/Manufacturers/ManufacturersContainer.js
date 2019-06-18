// @flow

import React from 'react';
import { connect } from 'react-redux';
import Select from '../../components/Select';
import { fetchManufacturers } from './ManufacturersRedux';

type Props = {
  onChange: (value: string) => void,
  manufacturers: Array<Object>,
  getManufacturers: () => void,
  className: string,
  defaultValue?: Object
};

type State = void;

class Manufactures extends React.Component<Props, State> {
  componentDidMount() {
    const { getManufacturers } = this.props;

    if (getManufacturers) {
      getManufacturers();
    }
  }

  render() {
    const {
      onChange, manufacturers, className, defaultValue,
    } = this.props;

    return (
      <Select
        className={className}
        onChange={onChange}
        options={manufacturers}
        withLabel
        label="Manufacturer"
        defaultValue={defaultValue || { label: 'All', value: '' }}
      />
    );
  }
}

function mapStateToProps(state: Object) {
  return {
    manufacturers: state.manufacturers.values,
  };
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {
    getManufacturers: () => dispatch(fetchManufacturers()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Manufactures);
