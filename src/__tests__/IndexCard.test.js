import React from 'react';
import { render, waitFor } from '@testing-library/react';
import IndexCard from '../components/IndexCard';
import getJournals from '../firebase';

jest.mock('../firebase');

describe('IndexCard component', () => {
  it('displays journals after fetching data', async () => {
    const journalsData = [
      {
        name: 'Journal 1',
        thumb: 'thumb1.jpg',
        camera: 'Camera 1',
        film: 'Film 1',
      },
      {
        name: 'Journal 2',
        thumb: 'thumb2.jpg',
        camera: 'Camera 2',
        film: 'Film 2',
      },
    ];

    getJournals.mockResolvedValueOnce(journalsData);

    const { getByText, getByAltText } = render(<IndexCard />);

    await waitFor(() => {
      expect(getByText('Journal 1')).toBeInTheDocument();
      expect(getByText('Journal 2')).toBeInTheDocument();
      expect(getByAltText('Journal 1 thumb')).toBeInTheDocument();
      expect(getByAltText('Journal 2 thumb')).toBeInTheDocument();
      expect(getByText('Camera 1')).toBeInTheDocument();
      expect(getByText('Camera 2')).toBeInTheDocument();
      expect(getByText('Film 1')).toBeInTheDocument();
      expect(getByText('Film 2')).toBeInTheDocument();
    });
  });
});
