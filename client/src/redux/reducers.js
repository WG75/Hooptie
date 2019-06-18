import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from '../containers/App/AppRedux';
import filterCarsReducer from '../containers/CarsFilter/CarsFilterRedux';
import colorsReducer from '../containers/Colors/ColorsRedux';
import ManufacturersReducer from '../containers/Manufacturers/ManufacturersRedux';
import reducerPersistor from '../config/reducerPersistor';


export default history => combineReducers({
  router: connectRouter(history),
  global: reducerPersistor(appReducer),
  filter: filterCarsReducer,
  colors: colorsReducer,
  manufacturers: ManufacturersReducer,
});
