import React, { useState, useEffect, useCallback } from 'react';
import { Observable, Subscriber } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { useTranslation } from 'react-i18next';

import { PrimaryButton } from '../../components';
import { useApi, useObservable } from '../../common';
import SearchAddress from './SearchAddress';
import BalanceCard from './BalanceCard';
import { BaseComponentProps } from '../../types';

const Balances: React.FC = () => {
  const { apiService } = useApi();
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscriber, setSubscriber] = useState<Subscriber<any> | null>(null);

  const [addresses, setAddresses] = useState<
    {
      key: number;
      address: string;
      observable: Observable<{
        address: string;
        freeBalance: string;
      }>;
    }[]
  >([]);

  const searchHandle = useCallback(
    address => {
      const freeBalance$ = apiService?.queryFreeBalance(address);

      // init
      setLoading(true);
      setErrorMsg('');

      return freeBalance$?.pipe(take(1)).subscribe(
        data => {
          setAddresses(state => {
            return [
              {
                key: +new Date(),
                address: data.address,
                observable: freeBalance$,
              },
            ].concat(state);
          });
          setLoading(false);
          setSubscriber(null);
          setSearchValue('');
        },
        () => {
          setErrorMsg(t('base:search_address_error'));
          setLoading(false);
          setSubscriber(null);
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
          errorMsg={errorMsg}
          onCancel={() => {
            setLoading(false);
            if (subscriber) subscriber.unsubscribe();
          }}
          onChange={setSearchValue}
          onSearch={value => {
            const unsub = searchHandle(value);
            setSubscriber(unsub as Subscriber<any>);
          }}
        />
      </div>
      <div className="balance-card-wrapper">
        {addresses.map(({ address, key, observable }) => (
          <BalanceCard className="balance-card" title={address} key={key} balance={observable} />
        ))}
      </div>
    </div>
  );
};

export default Balances;
