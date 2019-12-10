import React from 'react';

import SearchAddress from '../SearchAddress';
import BalanceCard from '../BalanceCard';
import '../../../i18n';

export default {
  title: 'Balances',
  decorators: [(storyFn: any) => <div style={{ textAlign: 'center', padding: 160 }}>{storyFn()}</div>],
};

export const _SearchAddress = () => <SearchAddress />;

export const _BalanceCard = () => <BalanceCard title="eieqwoeoqwe">哈哈哈哈哈哈</BalanceCard>;
