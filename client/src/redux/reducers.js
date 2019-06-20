import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import filterCarsReducer from '../containers/CarsFilter/CarsFilterRedux';
import colorsReducer from '../containers/Colors/ColorsRedux';
import manufacturersReducer from '../containers/Manufacturers/ManufacturersRedux';
import selectedCarReducer from '../containers/SelectedCar/SelectedCarRedux';
import favouritesReducer from '../containers/Favourites/FavouritesRedux';
import reducerPersistor from '../config/reducerPersistor';


export default history => combineReducers({
  router: connectRouter(history),
  filter: filterCarsReducer,
  colors: colorsReducer,
  selectedCar: selectedCarReducer,
  manufacturers: manufacturersReducer,
  favourites: reducerPersistor(favouritesReducer),
});
