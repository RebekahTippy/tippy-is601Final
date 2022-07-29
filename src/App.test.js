import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page title', async () => {
  render(<App />);
  const title = await screen.findByText("Pokedex List:");
  expect(title).toBeInTheDocument();
});