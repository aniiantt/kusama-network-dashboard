import React, { useEffect, useCallback } from 'react';

import { SearchInput, PrimaryButton } from '../../components';
import { useApi, useObservable } from '../../common';

const Balances: React.FC = () => {
  const { apiService } = useApi();

  const balance = useObservable(apiService?.queryFreeBalance('Eo8T8xFakcasqAqFAiqdfHgWknnqcmHD77e2RfSfVV1TeLA'));
  return (
    <div>
      <SearchInput isLoading={true} />
      <PrimaryButton>search</PrimaryButton>
      <div>{balance}</div>
    </div>
  );
};

export default Balances;
