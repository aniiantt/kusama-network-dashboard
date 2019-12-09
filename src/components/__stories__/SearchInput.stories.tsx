import React from 'react';

import { SearchInput } from '..';

export default {
  title: 'SearchInput',
  decorators: [(storyFn: any) => <div style={{ textAlign: 'center', padding: 160 }}>{storyFn()}</div>],
};

export const Base = () => <SearchInput isLoading={false} />;

export const Loading = () => <SearchInput isLoading={true} />;

export const Placeholder = () => <SearchInput isLoading={true} placeholder="search" />;
