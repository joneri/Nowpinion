import '@testing-library/jest-dom'; // Import jest-dom here
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store/store';
import BetTypeSelector from './BetTypeSelector';

test('renders bet type selector', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <BetTypeSelector />
      </Provider>
    </MemoryRouter>
  );
  expect(screen.getByText(/Select Bet Type/i)).toBeInTheDocument();
});

test('can select a bet type', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <BetTypeSelector />
      </Provider>
    </MemoryRouter>
  );
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'V75' } });
  expect(screen.getByDisplayValue('V75')).toBeInTheDocument();
});