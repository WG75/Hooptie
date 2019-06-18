// @flow
import React from 'react';
import Colors from '../../containers/Colors/ColorsContainer';
import Manufacturers from '../../containers/Manufacturers/ManufacturersContainer';
import Button from '../Button';
import './Filters.css';

type Props = {
  onChange: ({ color: string, manufacturer: string }) => void,
};

type State = {
  color: string,
  manufacturer: string
};

class Filters extends React.Component<Props, State> {
  state = {
    color: 'All',
    manufacturer: 'All',
  };

  handleChange(name: string, value: string) {
    this.setState({ [name]: value });
  }

  render() {
    const { onChange } = this.props;
    return (
      <div className="filters">
        <Colors
          className="filters__select"
          onChange={(value: string) => this.handleChange('color', value)}
        />
        <Manufacturers
          className="filters__select"
          onChange={(value: string) => this.handleChange('manufacturer', value)}
        />
        <Button
          className="filters__button"
          onClick={() => onChange(this.state)}
        >
          filter
        </Button>
      </div>
    );
  }
}

export default Filters;
