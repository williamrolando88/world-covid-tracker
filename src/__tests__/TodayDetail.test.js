import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TodayDetails from '../components/TodayDetails';

const initialState = {
  covidData: {
    countrySingleDay: {
      status: 'fulfilled',
      data: {
        today_confirmed: 1000,
        today_recovered: 2000,
        today_open_cases: 3000,
        today_deaths: 4000,
      },
    },
  },
};

const mockStore = configureStore();

describe('Should render', () => {
  test('should render TodayDetails', () => {
    const details = renderer.create(
      <Provider store={mockStore(initialState)}>
        <BrowserRouter>
          <TodayDetails />
        </BrowserRouter>
      </Provider>,
    );
    expect(details).toMatchSnapshot();
  });
});
