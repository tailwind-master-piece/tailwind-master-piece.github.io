/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import Img from '../../components/Img';

describe('<Img />', () => {
  it('Should render img component', () => {
    const { container } = render(<Img />);
    expect(screen.getByAltText('Description')).toBeInTheDocument();
    expect(container.querySelector('.img')).toBeInTheDocument();
  });
});
