// @flow
import React from 'react';
import Select from 'react-select';
import './Select.css';

type Props = {
  placeholder: string,
  onChange: (value: string) => void,
  options: Array<{ label: string, value: string }>,
  withLabel?: boolean,
  label?: string
};

type State = {
  selectedOption: string
};

class SelectComponent extends React.Component<Props, State> {
  state = {
    selectedOption: '',
  };

  handleChange = (selectedOption: string): void => {
    const { onChange } = this.props;
    this.setState({ selectedOption });
    if (onChange) {
      onChange(selectedOption);
    }
  };

  render() {
    const { selectedOption } = this.state;
    const {
      placeholder, options, withLabel, label,
    } = this.props;

    return (
      <div className="select-container">
        {withLabel && <span className="select-container__label">{label}</span>}
        <Select
          isSearchable={false}
          placeholder={placeholder || 'None'}
          className="react-select-container"
          classNamePrefix="react-select"
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

export default SelectComponent;
