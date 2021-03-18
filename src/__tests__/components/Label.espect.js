/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import Label from '../../components/Label';

describe('<Label />', () => {
  it('Should render label component', () => {
    render(<Label text="" />);
    expect(screen.getByTestId('label-normal')).toBeInTheDocument();
  });
  it('Should render label component with an img', () => {
    render(
      <Label
        text=""
        src="https://images.unsplash.com/photo-1616066959553-e13b2cfed557?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
    );
    expect(screen.getByTestId('label-image')).toBeInTheDocument();
  });
});
