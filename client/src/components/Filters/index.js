// @flow
import React from 'react';
import Colors from '../../containers/Colors/ColorsContainer';
import Manufacturers from '../../containers/Manufacturers/ManufacturersContainer';
import Button from '../Button';
import './Filters.css';

type Props = {
  onChange: ({ color: string, manufacturer: string }) => void,
  query: Object
};

type State = {
  color: string,
  manufacturer: string
};

class Filters extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      color: props.query.color || '',
      manufacturer: props.query.manufacturer || '',
    };
  }

  handleChange(name: string, value: string) {
    this.setState({ [name]: value });
  }

  render() {
    const { onChange, query } = this.props;
    return (
      <div className="filters">
        <Colors
          defaultValue={
            query.color && { label: query.color, value: query.value }
          }
          className="filters__select"
          onChange={(value: string) => this.handleChange('color', value)}
        />
        <Manufacturers
          defaultValue={
            query.manufacturer && {
              label: query.manufacturer,
              value: query.manufacturer,
            }
          }
          className="filters__select"
          onChange={(value: string) => this.handleChange('manufacturer', value)}
        />
        <Button
          className="filters__button"
          onClick={() => onChange({ ...this.props.query, ...this.state, page: 1 })
          }
        >
          filter
        </Button>
      </div>
    );
  }
}

export default Filters;
