import { render } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  // Ми нічого конкретного не шукаємо,
  // просто переконуємося, що компонент App здатний намалюватися.
});
