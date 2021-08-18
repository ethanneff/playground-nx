import { render } from '@testing-library/react';

import FeatureSentry from './feature-sentry';

describe('FeatureSentry', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureSentry />);
    expect(baseElement).toBeTruthy();
  });
});
