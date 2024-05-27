import React, { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal';

describe('Modal', () => {
  it('renders Modal when isOpen is true', () => {
    render(
      <Modal isOpen onClose={() => {}}>
        <div>Modal</div>
      </Modal>
    );

    expect(screen.getByText('Modal')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Modal</div>
      </Modal>
    );

    expect(screen.queryByText('Modal')).not.toBeInTheDocument();
  });

  it('call onClose when backdrop pressed', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen onClose={handleClose}>
        <div>Modal</div>
      </Modal>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onClose when the Escape key is pressed', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen onClose={handleClose}>
        <div>Modal</div>
      </Modal>
    );

    fireEvent.keyDown(screen.getByRole('button'), { key: 'Escape' });
    expect(handleClose).toHaveBeenCalled();
  });

  it('renders children inside the modal', () => {
    render(
      <Modal isOpen onClose={() => {}}>
        <div>children</div>
      </Modal>
    );

    expect(screen.getByText('children')).toBeInTheDocument();
  });
});
