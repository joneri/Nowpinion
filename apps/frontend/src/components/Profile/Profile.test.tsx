import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from './Profile';
import { RootState } from '../../store';

const mockStore = configureStore([]);
const initialState: RootState = {
  counter: { value: 0 },
  profile: {
    name: 'John Doe',
    bio: 'This is the bio of John Doe.',
  },
};

describe('Profile Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should display the profile name and bio', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );

    expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument(); // Matches the input's value
    expect(screen.getByDisplayValue('This is the bio of John Doe.')).toBeInTheDocument(); // Matches the textarea's value
  });

  it('should update the profile when the form is submitted', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/bio/i), { target: { value: 'Updated bio for Jane Doe.' } });

    fireEvent.click(screen.getByText(/save changes/i));

    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: 'profile/updateProfile',
        payload: { name: 'Jane Doe', bio: 'Updated bio for Jane Doe.' },
      },
    ]);

    expect(screen.getByDisplayValue('Jane Doe')).toBeInTheDocument(); // Check the updated value in the input
    expect(screen.getByDisplayValue('Updated bio for Jane Doe.')).toBeInTheDocument(); // Check the updated value in the textarea
  });
});