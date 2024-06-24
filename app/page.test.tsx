import { render, screen } from '@testing-library/react';

import Home from './page';

describe('HomePage', () => {
  it('should test', () => {
    render(<Home></Home>);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });
});
