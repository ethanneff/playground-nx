import { render } from '@testing-library/react';

import UtilTesting from './util-testing';

describe('UtilTesting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilTesting />);
    expect(baseElement).toBeTruthy();
  });
});
