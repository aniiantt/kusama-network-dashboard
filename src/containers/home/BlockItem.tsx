import React, { useLayoutEffect } from 'react';

import { numberFormat } from '../../utils';
import { useBlocks, useApi } from '../../common';

type BlockItemProps = {
  blockNumber: number;
  blockHash: string;
};

const BlockItem: React.FC<BlockItemProps> = React.memo(({ blockNumber, blockHash }) => {
  const setBlock = useBlocks(state => state.setBlock);
  const apiService = useApi(state => state.apiService);

  useLayoutEffect(() => {
    if (!blockHash) {
      apiService
        ?.queryBlockDetail(blockNumber)
        .toPromise()
        .then(data => {
          setBlock(data);
        });
    }
  }, [blockHash, apiService, setBlock, blockNumber]);

  return (
    <div className="card block-card">
      <header className="card-header">
        <p className="card-header-title">{blockHash || '-'}</p>
      </header>
      <div className="card-content">
        <div className="block-number">
          <div className="amount">{numberFormat(blockNumber)}</div>
        </div>
      </div>
    </div>
  );
});

export default BlockItem;
