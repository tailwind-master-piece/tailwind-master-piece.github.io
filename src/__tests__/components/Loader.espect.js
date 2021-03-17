/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import Loader from '../../components/Loader';

describe('<Loader />', () => {
  it('Should render loader component', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader-normal')).toBeInTheDocument();
  });
  it('Should render loader with arrow component', () => {
    render(<Loader arrow />);
    expect(screen.getByTestId('loader-arrow')).toBeInTheDocument();
  });
  it('Should render loader with dotted component', () => {
    render(<Loader dotted />);
    expect(screen.getByTestId('loader-dotted')).toBeInTheDocument();
  });
});
