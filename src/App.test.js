import { render, screen } from '@testing-library/react';
import App from './App';

test('renders floating portfolio links above a campfire', () => {
  render(<App />);
  expect(screen.getByRole('img', { name: /campfire/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
});
