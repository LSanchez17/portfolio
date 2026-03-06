import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio modal', () => {
  render(<App />);
  const modalButton = screen.getByText(/yes/i);
  expect(modalButton).toBeInTheDocument();
});
