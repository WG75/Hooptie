import appReducer, { appStartedSuccess } from '../../containers/App/AppRedux';

const initialState = {
  initialized: false,
};

describe('app reducer', () => {
  it('renders the initial state when passing undefined as state', () => {
    expect(appReducer(undefined, {})).toEqual(initialState);
  });

  it('it should handle APP_STARTED_SUCCESS', () => {
    expect(appReducer(initialState, appStartedSuccess())).toEqual({
      initialized: true,
    });
  });
});
