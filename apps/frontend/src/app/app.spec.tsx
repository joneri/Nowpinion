import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render the Redux Counter', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Redux Counter/gi)).toBeTruthy();
  });
});