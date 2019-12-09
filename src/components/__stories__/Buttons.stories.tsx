import React from 'react';

import { PrimaryButton, DefaultButton } from '../';

export default {
  title: 'Buttons',
  decorators: [(storyFn: any) => <div style={{ textAlign: 'center', padding: 160 }}>{storyFn()}</div>],
};

export const Primary = () => (
  <div>
    <PrimaryButton onClick={() => {}}>Search</PrimaryButton>
  </div>
);

export const Default = () => (
  <div>
    <DefaultButton onClick={() => {}}>Search</DefaultButton>
  </div>
);
