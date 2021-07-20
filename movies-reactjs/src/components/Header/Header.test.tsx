import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Components Test', () => {
  test('Renders Content', () => {
    const component = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(component).toBeDefined();
  });
});
