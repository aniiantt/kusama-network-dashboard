import React from 'react';

import { Spinner } from '..';

export default {
  title: 'Spinner',
  decorators: [(storyFn: any) => <div style={{ textAlign: 'center', padding: 160 }}>{storyFn()}</div>],
};

export const Base = () => (
  <div>
    <Spinner />
  </div>
);
