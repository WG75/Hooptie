import selectedCarMockData from 'selectedCarData';
import CarsFilterReducer, {
  initialState,
  fetchCarRequest,
  fetchCarSuccess,
} from '../../containers/SelectedCar/SelectedCarRedux';

describe('SelectedCar reducer', () => {
  it('renders the initial state when passing undefined as state', () => {
    expect(CarsFilterReducer(undefined, {})).toEqual(initialState);
  });

  it('it should handle FETCH_CAR_REQUEST', () => {
    expect(
      CarsFilterReducer(initialState, fetchCarRequest()),
    ).toEqual({
      ...initialState,
      loading: true,
      error: false,
    });
  });

  it('it should handle FETCH_CAR_SUCCESS', () => {
    expect(CarsFilterReducer(initialState, fetchCarSuccess(selectedCarMockData))).toEqual(
      {
        ...initialState,
        error: false,
        loading: false,
        car: selectedCarMockData.car,
      },
    );
  });
});
