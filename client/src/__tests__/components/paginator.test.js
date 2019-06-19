import React from 'react';
import { create } from 'react-test-renderer';
import Enzyme from '../../config/enzyme';
import Paginator from '../../components/Paginator';

describe('Paginator component', () => {
  const onChangeMock = jest.fn();

  const wrapper = Enzyme.shallow(
    <Paginator
      nextPage={3}
      prevPage={1}
      lastPage={10}
      currentPage={2}
      onChange={onChangeMock}
      query={{
        page: 2,
        sort: 'dec',
        color: 'red',
        manufacturer: 'BMW',
      }
      }
    />,
  );

  it('call onChange handler giving it the next page as params', () => {
    wrapper.find('.link').at(0).simulate('click');
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toEqual({
      page: 1,
      sort: 'dec',
      color: 'red',
      manufacturer: 'BMW',
    });
  });


  test('it matches the snapshot', () => {
    const component = create(<Paginator
      nextPage={3}
      prevPage={1}
      lastPage={10}
      currentPage={2}
      onChange={onChangeMock}
      query={{
        page: 2,
        sort: 'dec',
        color: 'red',
        manufacturer: 'BMW',
      }
        }
    />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
