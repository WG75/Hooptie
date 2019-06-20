import configureStore from 'redux-mock-store';
import * as AppRedux from '../../containers/App/AppRedux';

const mockStore = configureStore();
const store = mockStore({ global: {} });

describe('init App', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('dispatches APP_STARTED_REQUEST correctly', () => {
    store.dispatch(AppRedux.appStartedRequest());

    const expectedActions = [{ type: AppRedux.APP_STARTED_REQUEST }];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches APP_STARTED_SUCCESS correctly', () => {
    store.dispatch(AppRedux.appStartedSuccess());

    const expectedActions = [{ type: AppRedux.APP_STARTED_SUCCESS }];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches APP_STARTED_ERROR correctly', () => {
    store.dispatch(AppRedux.appStartedError({ message: 'Network Error' }));

    const expectedActions = [
      {
        type: AppRedux.APP_STARTED_ERROR,
        payload: { error: { message: 'Network Error' } },
      },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
});
