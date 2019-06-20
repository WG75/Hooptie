import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

import mockData from 'carsData';
import * as CarsFilterRedux from '../../containers/CarsFilter/CarsFilterRedux';
import api from '../../api';

const mockStore = configureStore([thunk.withExtraArgument(api)]);
const axiosMock = new AxiosMockAdapter(axios);
const store = mockStore({ global: {} });

describe('CarsFilter actions', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('dispatches FETCH_CARS_REQUEST correctly', () => {
    store.dispatch(CarsFilterRedux.fetchCarsRequest());

    const expectedActions = [{ type: CarsFilterRedux.FETCH_CARS_REQUEST }];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches FETCH_CARS_SUCCESS correctly', () => {
    store.dispatch(CarsFilterRedux.fetchCarsSuccess());

    const expectedActions = [{ type: CarsFilterRedux.FETCH_CARS_SUCCESS }];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches FETCH_CARS_ERROR correctly', () => {
    store.dispatch(
      CarsFilterRedux.fetchCarsError({ message: 'Network Error' }),
    );

    const expectedActions = [
      {
        type: CarsFilterRedux.FETCH_CARS_ERROR,
        payload: { error: { message: 'Network Error' } },
      },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches QUERY_CHANGE correctly', () => {
    store.dispatch(CarsFilterRedux.queryChange({ page: 1 }));

    const expectedActions = [
      {
        type: CarsFilterRedux.QUERY_CHANGE,
        payload: { query: { page: 1 } },
      },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  // async action
  it('fetches cars and dispatch subsequent actions when the response 200', () => {
    axiosMock.onGet('/cars?page=3&color="red').reply(200, mockData);

    const expectedActions = [
      {
        type: CarsFilterRedux.QUERY_CHANGE,
        payload: { query: { page: 3, color: 'red' } },
      },
      { type: CarsFilterRedux.FETCH_CARS_REQUEST },
      { type: CarsFilterRedux.FETCH_CARS_SUCCESS, payload: mockData },
      {
        type: '@@router/CALL_HISTORY_METHOD',
        payload: {
          args: ['/cars?page=3&color=red'],
          method: 'push',
        },
      },
    ];

    return store
      .dispatch(CarsFilterRedux.fetchCars({ page: 3, color: 'red' }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
