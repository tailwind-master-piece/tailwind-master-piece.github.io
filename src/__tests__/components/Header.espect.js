/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe('<Header />', () => {
  it('should render Header component', () => {
    const { container } = render(<Header />);
    expect(container).not.toBeNull();
  });

  it('should container have grid class', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('div.grid')).not.toBeNull();
  });

  it('should render expected columns', () => {
    const { container } = render(<Header columns="grid-cols-9" />);
    expect(
      container.querySelector('div[class="grid grid-cols-9"]')
    ).not.toBeNull();
  });

  it('should render expected backgroundColor', () => {
    const { container } = render(<Header backgroundColor="bg-blue-900" />);
    expect(
      container.querySelector('div[class="grid bg-blue-900"]')
    ).not.toBeNull();
  });

  it('should render expected text color', () => {
    const { container } = render(<Header textColor="text-pink-600" />);
    expect(
      container.querySelector('div[class="grid text-pink-600"]')
    ).not.toBeNull();
  });

  it('should add horizontal and vertical paddling', () => {
    const { container } = render(
      <Header horizontalPadding="px-60" verticalPadding="py-8" />
    );
    expect(
      container.querySelector('div[class="grid px-60 py-8"]')
    ).not.toBeNull();
  });

  it('should add horizontal and vertical margin', () => {
    const { container } = render(
      <Header verticalMargin="my-8" horizontalMargin="mx-8" />
    );
    expect(
      container.querySelector('div[class="grid mx-8 my-8"]')
    ).not.toBeNull();
  });

  it('should render children', () => {
    const { container } = render(
      <Header>
        <h1>I am a children</h1>
        <p>I am another children</p>
      </Header>
    );
    const header = container.querySelector('div.grid');
    expect(header.children.length).toBe(2);
  });
});
