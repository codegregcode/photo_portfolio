import React, { render, screen, fireEvent } from '@testing-library/react';
import Title from '../components/Title';

describe('Title', () => {
  beforeEach(() => {
    render(<Title />);
  });

  it('renders title button', () => {
    const buttonElement = screen.getByText(/enter/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders title h1 after button click', () => {
    const buttonElement = screen.getByText(/enter/i);

    fireEvent.click(buttonElement);

    const h1Element = screen.getByText(/echium_photo/i);
    expect(h1Element).toBeInTheDocument();
  });

  it('render title img after button click', () => {
    const buttonElement = screen.getByText(/enter/i);

    fireEvent.click(buttonElement);

    const imgElement = screen.getByAltText(/Title Background/i);
    expect(imgElement).toBeInTheDocument();
  });
});
