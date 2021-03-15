/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Divider from '../../components/Divider';

describe('<Divider />', () => {
  it('should render divider component', () => {
    const { container } = render(<Divider />);
    expect(container.querySelector('div.divider')).not.toBeNull();
  });

  it('should render custom height for divider', () => {
    const { container } = render(<Divider height="divide-y-4" />);
    expect(
      container.querySelector('div[class="divider divide-y-4"]')
    ).not.toBeNull();
  });

  it('should render default height for divider', () => {
    const { container } = render(<Divider />);
    expect(
      container.querySelector('div[class="divider divide-y-2"]')
    ).not.toBeNull();
  });

  it('should render divider color', () => {
    const { container } = render(<Divider color="divide-blue-500" />);
    expect(
      container.querySelector('div[class="divider divide-y-2 divide-blue-500"]')
    ).not.toBeNull();
  });

  it('should render expected divided style', () => {
    const { container } = render(<Divider style="divide-solid" />);
    expect(
      container.querySelector('div[class="divider divide-y-2 divide-solid"]')
    ).not.toBeNull();
  });
});
