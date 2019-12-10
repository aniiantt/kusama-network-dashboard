import React from 'react';

import { Amount } from '..';

export default {
  title: 'Amount',
  decorators: [(storyFn: any) => <div style={{ textAlign: 'center', padding: 160 }}>{storyFn()}</div>],
};

export const Base = () => (
  <div>
    <Amount value="262769900000000" />
  </div>
);
