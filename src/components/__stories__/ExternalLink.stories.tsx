import React from 'react';

import { ExternalLink } from '..';

export default {
  title: 'ExternalLink',
  decorators: [(storyFn: any) => <div style={{ textAlign: 'center', padding: 160 }}>{storyFn()}</div>],
};

export const Base = () => <ExternalLink to="https://github.com">github</ExternalLink>;

export const Empty = () => <ExternalLink to="https://github.com"></ExternalLink>;
