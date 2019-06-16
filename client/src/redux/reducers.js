import { combineReducers } from 'redux';
import appReducer from '../containers/App/AppRedux';
import reducerPersistor from '../config/reducerPersistor';

export default combineReducers({
  global: reducerPersistor(appReducer),
});
