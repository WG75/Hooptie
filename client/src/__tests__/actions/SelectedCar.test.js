import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import selectedCarMockData from 'selectedCarData';
import * as SelectedCarRedux from '../../containers/SelectedCar/SelectedCarRedux';
import api from '../../api';

const mockStore = configureStore([thunk.withExtraArgument(api)]);
const axiosMock = new AxiosMockAdapter(axios);
const store = mockStore({ global: {} });

describe('SelectedCar actions', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('dispatches FETCH_CAR_REQUEST correctly', () => {
    store.dispatch(SelectedCarRedux.fetchCarRequest());

    const expectedActions = [{ type: SelectedCarRedux.FETCH_CAR_REQUEST }];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches FETCH_CAR_SUCCESS correctly', () => {
    store.dispatch(SelectedCarRedux.fetchCarSuccess());

    const expectedActions = [{ type: SelectedCarRedux.FETCH_CAR_SUCCESS }];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches FETCH_CAR_ERROR correctly', () => {
    store.dispatch(
      SelectedCarRedux.fetchCarError({ message: 'Network Error' }),
    );

    const expectedActions = [
      {
        type: SelectedCarRedux.FETCH_CAR_ERROR,
        payload: { error: { message: 'Network Error' } },
      },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  // async action
  it('fetches car and dispatch subsequent actions successfuly', () => {
    axiosMock.onGet('/cars/33550').reply(200, selectedCarMockData);

    const expectedActions = [
      {
        type: SelectedCarRedux.FETCH_CAR_REQUEST,
      },
      { type: SelectedCarRedux.FETCH_CAR_SUCCESS, payload: selectedCarMockData },
    ];

    return store.dispatch(SelectedCarRedux.fetchCar(33550)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
