/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import Input from '../../components/Input';

describe('<Input />', () => {
  it('Should render input component', () => {
    render(<Input name="test" />);
    expect(screen.getByTestId('input-test')).toBeInTheDocument();
    screen.debug();
  });
});
