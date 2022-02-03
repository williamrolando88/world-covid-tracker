import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TodayDetails from '../components/TodayDetails';
import { render } from '@testing-library/react';

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

describe('should render the given values', () => {
  test('should render total_confirmed', () => {
    const { getByText } = render(
      <Provider store={mockStore(initialState)}>
        <BrowserRouter>
          <TodayDetails />
        </BrowserRouter>
      </Provider>,
    );
    getByText('1.000');
    getByText('2.000');
    getByText('3.000');
    getByText('4.000');
  });
});
