import React, { useEffect, useCallback } from 'react';

import { PrimaryButton } from '../../components';
import { useApi, useObservable } from '../../common';
import SearchAddress from './SearchAddress';
import BalanceCard from './BalanceCard';
import { BaseComponentProps } from '../../types';

const Balances: React.FC = () => {
  const { apiService } = useApi();

  const balance = useObservable(apiService?.queryFreeBalance('Eo8T8xFakcasqAqFAiqdfHgWknnqcmHD77e2RfSfVV1TeLA'));
  return (
    <div className="container">
      <div className="search-wrapper">
        <SearchAddress />
      </div>
      <div className="balance-card-warpper">
        <BalanceCard className="balance-card" title="eosssqwe12312313" />
        <BalanceCard className="balance-card" title="eosssqwe12312313" />
        <BalanceCard className="balance-card" title="eosssqwe12312313" />
        <BalanceCard className="balance-card" title="eosssqwe12312313" />
        <BalanceCard className="balance-card" title="eosssqwe12312313" />
        <BalanceCard className="balance-card" title="eosssqwe12312313" />
        <BalanceCard className="balance-card" title="eosssqwe12312313" />
      </div>
    </div>
  );
};

export default Balances;
