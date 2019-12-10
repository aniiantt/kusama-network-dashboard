import React, { useState, useEffect, useCallback } from 'react';
import { catchError, take } from 'rxjs/operators';

import { PrimaryButton } from '../../components';
import { useApi, useObservable } from '../../common';
import SearchAddress from './SearchAddress';
import BalanceCard from './BalanceCard';
import { BaseComponentProps } from '../../types';

const Balances: React.FC = () => {
  const { apiService } = useApi();
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [cancelCall, setCancelCall] = useState<any>(null);

  const searchHandle = useCallback(
    address => {
      const freeBalance$ = apiService?.queryFreeBalance(address);
      setLoading(true);
      return freeBalance$?.pipe(take(1)).subscribe(
        data => {
          console.log(data);
          setLoading(false);
          setCancelCall(null);
        },
        error => {
          console.log('1111');
          setLoading(false);
          setCancelCall(null);
        }
      );
    },
    [apiService]
  );

  return (
    <div className="container">
      <div className="search-wrapper">
        <SearchAddress
          value={searchValue}
          loading={loading}
          onCancel={() => {
            setLoading(false);
            if (cancelCall) cancelCall.unsubscribe();
          }}
          onChange={setSearchValue}
          onSearch={value => {
            const unsub = searchHandle(value);
            setCancelCall(unsub);
          }}
        />
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
