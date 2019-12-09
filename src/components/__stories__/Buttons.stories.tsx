import React from 'react';

import { PrimaryButton } from '../';

export default {
  title: 'Buttons',
  decorators: [(storyFn: any) => <div style={{ textAlign: 'center', padding: 160 }}>{storyFn()}</div>],
};

export const Primary = () => (
  <div>
    <PrimaryButton>111</PrimaryButton>
  </div>
);
