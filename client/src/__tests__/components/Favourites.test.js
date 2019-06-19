import React from 'react';
import { create } from 'react-test-renderer';
import Enzyme from '../../config/enzyme';
import Favourites from '../../components/Favourites';

describe('Favourites component', () => {
  test('it matches the snapshot when car is already saved', () => {
    const component = create(<Favourites isSaved />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('it matches the snapshot when car is not saved', () => {
    const component = create(<Favourites isSaved={false} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('it call onSave handler when save bitton is clicked', () => {
    const onSaveMock = jest.fn();
    const wrapper = Enzyme.shallow(
      <Favourites isSaved={false} onSave={onSaveMock} />,
    );

    expect(wrapper.find('Button').length).toBe(1);
    wrapper.find('Button').props().onClick();
    expect(onSaveMock.mock.calls.length).toBe(1);
  });

  it('it call onRemove handler when save bitton is clicked', () => {
    const onRemoveMock = jest.fn();
    const wrapper = Enzyme.shallow(
      <Favourites isSaved onRemove={onRemoveMock} />,
    );

    expect(wrapper.find('Button').length).toBe(1);
    wrapper.find('Button').props().onClick();
    expect(onRemoveMock.mock.calls.length).toBe(1);
  });
});
