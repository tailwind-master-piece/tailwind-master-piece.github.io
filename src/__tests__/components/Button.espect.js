/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import Button from '../../components/Button';

describe('<Button />', () => {
  it('should render button component', () => {
    const { container } = render(<Button />);
    expect(screen.getByTitle('button')).toBeInTheDocument();
    expect(container.querySelector('.button')).toBeInTheDocument();
  });

  it('should have selected border radius class?', () => {
    const { container: containerForSmallRadius } = render(
      <Button radius="sm" />
    );
    const { container: containerForMediumRadius } = render(
      <Button radius="md" />
    );
    const { container: containerForLargeRadius } = render(
      <Button radius="lg" />
    );
    const { container: containerForExtraLargeRadius } = render(
      <Button radius="xl" />
    );
    expect(
      containerForSmallRadius.querySelector('div.rounded-sm')
    ).toBeInTheDocument();
    expect(
      containerForMediumRadius.querySelector('div.rounded-md')
    ).toBeInTheDocument();
    expect(
      containerForLargeRadius.querySelector('div.rounded-lg')
    ).toBeInTheDocument();
    expect(
      containerForExtraLargeRadius.querySelector('div.rounded-xl')
    ).toBeInTheDocument();
  });

  it('should have respective color', () => {
    const { container: redButton } = render(<Button color="red" />);
    const { container: blueButton } = render(<Button color="blue" />);
    const { container: pinkButton } = render(<Button color="pink" />);
    expect(redButton.querySelector('div.bg-red-200')).toBeInTheDocument();
    expect(blueButton.querySelector('div.bg-blue-200')).toBeInTheDocument();
    expect(pinkButton.querySelector('div.bg-pink-200')).toBeInTheDocument();
  });
});
