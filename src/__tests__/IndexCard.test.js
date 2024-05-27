import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import IndexCard from '../components/IndexCard';

import getJournals from '../firebase';

jest.mock('../firebase');
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

describe('IndexCard component', () => {
  it('displays journals after fetching data', async () => {
    const journalsData = [
      {
        name: 'Journal 1',
        thumb: 'thumb1.jpg',
        path: 'a/path',
      },
      {
        name: 'Journal 2',
        thumb: 'thumb2.jpg',
        path: 'another/path',
      },
    ];

    getJournals.mockResolvedValueOnce(journalsData);

    const { getByText, getByAltText } = render(
      <Router>
        <IndexCard />
      </Router>
    );

    await waitFor(() => {
      expect(getByText('Journal 1')).toBeInTheDocument();
      expect(getByText('Journal 2')).toBeInTheDocument();
      expect(getByAltText('Journal 1 thumb')).toBeInTheDocument();
      expect(getByAltText('Journal 2 thumb')).toBeInTheDocument();
    });
  });

  it('displays toast error when fetching data fails', async () => {
    const errorMessage = 'Failed to fetch journals';
    getJournals.mockRejectedValueOnce(new Error(errorMessage));

    render(
      <Router>
        <IndexCard />
      </Router>
    );

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(errorMessage);
    });
  });
});
