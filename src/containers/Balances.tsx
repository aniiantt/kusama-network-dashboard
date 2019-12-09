import React, { useEffect, useCallback } from 'react';

import { FreeBalance } from '../components';
import { useApi } from '../common';

const Balances: React.FC = () => {
  return (
    <div>
      <FreeBalance value="Eo8T8xFakcasqAqFAiqdfHgWknnqcmHD77e2RfSfVV1TeLA" />
    </div>
  );
};

export default Balances;
