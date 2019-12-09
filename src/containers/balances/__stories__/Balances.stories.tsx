import React from 'react';

import SearchAddress from '../SearchAddress';
import '../../../i18n';

export default {
  title: 'Balances',
  decorators: [(storyFn: any) => <div style={{ textAlign: 'center', padding: 160 }}>{storyFn()}</div>],
};

export const Base = () => <SearchAddress />;
