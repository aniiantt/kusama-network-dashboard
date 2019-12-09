import React, { useState, useEffect, useMemo } from 'react';

import { BaseComponentProps } from '../types';
import { useApi } from '../common';

type FreeBalanceProps = {
  value: string;
};

const FreeBalance: React.FC<BaseComponentProps & FreeBalanceProps> = ({
  component: Component = 'span',
  value: address,
  render = x => x,
  ...other
}) => {
  const [freeBalance, setFreeBalance] = useState();
  const { isReady, apiService } = useApi();

  useEffect(() => {
    const subscription = apiService?.queryFreeBalance(address).subscribe(data => {
      setFreeBalance(data);
    });
    return () => subscription?.unsubscribe();
  }, [apiService, isReady, address]);

  return <Component {...other}>{render(freeBalance)}</Component>;
};

export default FreeBalance;
