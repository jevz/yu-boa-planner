import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app header', () => {
  render(<App />);
  const heading = screen.getByText(/Yu's Short Rib Bao/i);
  expect(heading).toBeInTheDocument();
});
