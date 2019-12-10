import React, { useEffect, useCallback } from 'react';

import { PrimaryButton } from '../../components';
import { useApi, useObservable } from '../../common';
import SearchAddress from './SearchAddress';
import BalanceCard from './BalanceCard';

const Balances: React.FC = () => {
  const { apiService } = useApi();

  const balance = useObservable(apiService?.queryFreeBalance('Eo8T8xFakcasqAqFAiqdfHgWknnqcmHD77e2RfSfVV1TeLA'));
  return (
    <div className="container">
      <div className="search-wrapper">
        <SearchAddress />
      </div>
      <div>
        <BalanceCard title="eosssqwe12312313" />
        <BalanceCard title="eosssqwe12312313" />
        <BalanceCard title="eosssqwe12312313" />
        <BalanceCard title="eosssqwe12312313" />
        <BalanceCard title="eosssqwe12312313" />
        <BalanceCard title="eosssqwe12312313" />
        <BalanceCard title="eosssqwe12312313" />
      </div>
    </div>
  );
};

export default Balances;
