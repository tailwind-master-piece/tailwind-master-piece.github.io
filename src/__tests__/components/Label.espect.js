/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import Label from '../../components/Label';

describe('<Label />', () => {
  it('Should render label component', () => {
    render(<Label text="" />);
    expect(screen.getByTestId('label-normal')).toBeInTheDocument();
  });
});
