import React, { render, screen } from '@testing-library/react';
import Index from '../components/Index';

describe('Index', () => {
  it('renders all the p elements', () => {
    render(<Index />);
    const pOne = screen.getByText(/a photographer based in Leeds/i);
    const pTwo = screen.getByText(/mainly shooting film/i);
    const pThree = screen.getByText(/see what i've been up to:/i);
    const pFour = screen.getByText(/follow me on instagram/i);

    expect(pOne).toBeInTheDocument();
    expect(pTwo).toBeInTheDocument();
    expect(pThree).toBeInTheDocument();
    expect(pFour).toBeInTheDocument();
  });
});
