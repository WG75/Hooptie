import React from 'react';
import { create } from 'react-test-renderer';
import Enzyme from '../../config/enzyme';
import Select from '../../components/Select';

describe('Select component', () => {
  const selectOptions = [
    { label: 'easy', value: 'easy' },
    { label: 'hard', value: 'hard' },
    { label: 'medium', value: 'medium' },
  ];
  const onChangeMock = jest.fn();

  const wrapper = Enzyme.shallow(
    <Select
      placeholder="name"
      className="select"
      options={selectOptions}
      defaultValue={{ label: 'easy', value: 'easy' }}
      onChange={onChangeMock}
      withLabel
      label="difficulty"
    />,
  );

  it('passes className prop', () => {
    expect(wrapper.find('.select-container').props().className).toBe(
      'select-container select',
    );
  });

  it('renders label element', () => {
    expect(wrapper.find('.select-container__label').length).toBe(1);
  });

  it('sets the defaultValue to state', () => {
    expect(wrapper.state().selectedOption).toEqual({
      label: 'easy',
      value: 'easy',
    });
  });

  it('changes state when selected option is changed and updates the click-through container', () => {
    // simulate change event
    wrapper.instance().handleChange({ label: 'medium', value: 'medium' });

    // check that the selected option is updated when state changed and
    expect(wrapper.state().selectedOption).toEqual({
      label: 'medium',
      value: 'medium',
    });
  });


  test('it matches the snapshot', () => {
    const component = create(<Select
      placeholder="name"
      className="select"
      options={selectOptions}
      defaultValue={{ label: 'easy', value: 'easy' }}
      onChange={onChangeMock}
      withLabel
      label="difficulty"
    />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
