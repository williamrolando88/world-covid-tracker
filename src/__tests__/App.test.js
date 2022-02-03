import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

const initialState = {
  covidData: {
    today: {
      status: 'fulfilled',
      countries: {
        Ecuador: { today_confirmed: 10000 },
        Colombia: { today_confirmed: 20000 },
        Mexico: { today_confirmed: 30000 },
      },
    },
  },
};

const mockStore = configureStore();

describe('Check app snapshot', () => {
  test('should renderApp', () => {
    const app = renderer.create(
      <Provider store={mockStore(initialState)}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });
});
