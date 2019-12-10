import React from 'react';

import BlockItem from '../BlockItem';

export default {
  title: 'Home',
  decorators: [(storyFn: any) => <div style={{ padding: 160 }}>{storyFn()}</div>],
};

export const _BlockItem = () => <BlockItem blockNumber={123} blockHash={'0x2131231231'} />;
