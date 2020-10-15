import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

const setUp = () => {
  const { getByText } = render(<App />);

  return {
    header: getByText(/register with us/i)
  }
}

describe('App', () => {
  it('should render the form component correctly', () => {
    const { header } = setUp();

    expect(header).toBeInTheDocument();
  });

})