import {
  fetchCountryDay,
  fetchToday,
  storeCountryDay,
} from '../redux/reducers/covidData';
import store from '../redux/storeConfig';

// const dispatch = useDispatch();

describe('Test synchrouns redux action', () => {
  test('should store country and date', () => {
    const testData = { country: 'ecuador', date: '2022-02-01' };
    store.dispatch(storeCountryDay(testData));
    expect(store.getState().covidData).toStrictEqual({
      today: { status: '', countries: {} },
      countrySingleDay: { status: '', data: {} },
      date: '2022-02-01',
      country: 'ecuador',
    });
  });
});

describe('Test asynchrouns redux action', () => {
  const testData = { countryId: 'spain', date: '2022-02-01' };
  test('should store country and date data', async () => {
    expect(store.getState().covidData.countrySingleDay.status).toBe('');
    expect(store.getState().covidData.countrySingleDay.status).toBeFalsy();
    expect(
      Object.keys(store.getState().covidData.countrySingleDay.data).length,
    ).toBe(0);
  });
  test('should store country and date data', async () => {
    store.dispatch(fetchCountryDay(testData));
    expect(store.getState().covidData.countrySingleDay).toBeInstanceOf(Object);
  });
  test('store.today should be empty', async () => {
    expect(store.getState().covidData.today.status).toBe('');
    expect(store.getState().covidData.today.status).toBeFalsy();
  });
  test('should store today world data', async () => {
    store.dispatch(fetchToday(testData.date));
    expect(store.getState().covidData.today.status).toBeTruthy();
  });
});
