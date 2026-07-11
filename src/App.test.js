import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /no family should have to/i });
  expect(heading).toBeInTheDocument();
});
