import React, { render, screen } from '@testing-library/react';
import Title from '../components/Title';

describe('Title', () => {
  it('renders title h1', () => {
    render(<Title />);
    const h1Element = screen.getByText(/echium_photo/i);
    expect(h1Element).toBeInTheDocument();
  });

  it('render title img', () => {
    render(<Title />);
    const imgElement = screen.getByAltText(/Title Background/i);
    expect(imgElement).toBeInTheDocument();
  });
});
