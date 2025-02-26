/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import Button from '../../components/Button';

describe('<Button />', () => {
  it('should render button component', () => {
    const { container } = render(<Button />);
    expect(screen.getByTitle('button')).toBeInTheDocument();
    expect(container.querySelector('.button')).toBeInTheDocument();
  });

  it('should render expected color', () => {
    const { container } = render(<Button color="bg-green-800" />);
    expect(container.querySelector('div.bg-green-800')).toBeInTheDocument();
  });

  it('should render expected radius', () => {
    const { container } = render(<Button radius="rounded-full" />);
    expect(container.querySelector('div.rounded-full')).toBeInTheDocument();
  });

  it('should render expected textColor', () => {
    const { container } = render(<Button textColor="text-gray-800" />);
    expect(container.querySelector('div.text-gray-800')).toBeInTheDocument();
  });

  it('should render expected children', () => {
    const expectedText = 'hey you';
    const { container } = render(
      <Button
        radius="rounded-full"
        color="bg-green-800"
        textColor="text-gray-800"
      >
        hey you
      </Button>
    );
    expect(container.textContent).toBe(expectedText);
  });
});
