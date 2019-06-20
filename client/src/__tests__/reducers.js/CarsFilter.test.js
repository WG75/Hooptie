import carsData from 'carsData';
import CarsFilterReducer, {
  initialState,
  queryChange,
  fetchCarsSuccess,
} from '../../containers/CarsFilter/CarsFilterRedux';

describe('app reducer', () => {
  it('renders the initial state when passing undefined as state', () => {
    expect(CarsFilterReducer(undefined, {})).toEqual(initialState);
  });

  it('it should handle QUERY_CHANGE', () => {
    expect(
      CarsFilterReducer(initialState, queryChange({ page: 2, color: 'red' })),
    ).toEqual({
      ...initialState,
      query: { ...initialState.query, page: 2, color: 'red' },
    });
  });

  it('it should handle FETCH_CARS_SUCCESS', () => {
    expect(CarsFilterReducer(initialState, fetchCarsSuccess(carsData))).toEqual(
      {
        ...initialState,
        cars: carsData.cars,
        currentPage: initialState.query.page,
        lastPage: carsData.totalPageCount,
      },
    );
  });
});
