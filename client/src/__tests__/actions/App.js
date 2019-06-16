import configureStore from 'redux-mock-store';
import * as actions from '../../containers/App/actions';
import * as types from '../../containers/App/constants';

const mockStore = configureStore();
const store = mockStore({ global: {} });

describe('App init', () => {
});
