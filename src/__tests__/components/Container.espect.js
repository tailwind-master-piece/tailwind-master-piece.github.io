/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Container from '../../components/Container';

describe('<Container />', () => {
  it('should render container component', () => {
    const { container } = render(<Container />);
    expect(container.querySelector('div[class="container"]')).not.toBeNull();
  });

  it('should return the children', () => {
    const { container } = render(
      <Container>
        <>
          <h2>Hello</h2>
          <p>I am a child</p>
        </>
      </Container>
    );
    expect(
      container.querySelector('div[class="container"]').children
    ).not.toBeNull();
  });

  it('should center container', () => {
    const { container } = render(
      <Container center={true}>
        <>
          <h2>Hello</h2>
          <p>I am a child</p>
        </>
      </Container>
    );
    expect(
      container.querySelector('div[class="container mx-auto"]')
    ).not.toBeNull();
  });

  it('should no center the container', () => {
    const { container } = render(
      <Container center={false}>
        <>
          <h2>Hello</h2>
          <p>I am a child</p>
        </>
      </Container>
    );
    expect(
      container.querySelector('div[class="container mx-auto"]')
    ).toBeNull();
  });

  it('should add horizontal and vertical paddling', () => {
    const { container } = render(
      <Container horizontalPadding="px-60" verticalPadding="py-8" />
    );
    expect(
      container.querySelector('div[class="container px-60 py-8"]')
    ).not.toBeNull();
  });

  it('should add horizontal and vertical margin', () => {
    const { container } = render(
      <Container verticalMargin="my-8" horizontalMargin="mx-8" />
    );
    expect(
      container.querySelector('div[class="container mx-8 my-8"]')
    ).not.toBeNull();
  });

  it('should render expected background color', () => {
    const { container } = render(<Container backgroundColor="bg-blue-100" />);
    expect(
      container.querySelector('div[class="container bg-blue-100"]')
    ).not.toBeNull();
  });

  it('should render expected text color', () => {
    const { container } = render(<Container textColor="text-black" />);
    expect(
      container.querySelector('div[class="container text-black"]')
    ).not.toBeNull();
  });
});
