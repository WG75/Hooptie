// @flow
import React from 'react';
import Select from 'react-select';
import './Select.css';

type Props = {
  placeholder?: string,
  onChange: (value: string) => void,
  options: Array<{ label: string, value: string }>,
  withLabel?: boolean,
  label?: string,
  defaultValue?: { label: string, value: string }
  ,
  className: string
};

type State = {
  selectedOption: {label: string, value: string},
};

class SelectComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { defaultValue } = this.props;
    this.state = {
      selectedOption: defaultValue || { label: 'None', value: 'None' }
      ,
    };
  }

  handleChange = (selectedOption: {label: string, value: string}): void => {
    const { onChange } = this.props;
    this.setState({ selectedOption });
    if (onChange) {
      onChange(selectedOption.value);
    }
  };

  render() {
    const { selectedOption } = this.state;
    const {
      placeholder, options, withLabel, label, className,
    } = this.props;

    return (
      <div className={`select-container ${className}`}>
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
