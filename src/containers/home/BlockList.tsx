import React, { useMemo, useCallback, useLayoutEffect } from 'react';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';

import { useApi, useBlocks } from '../../common';
import { IntersectionObserve, Spinner } from '../../components';
import BlockItem from './BlockItem';

const BlockList: React.FC = () => {
  const { apiService } = useApi();
  const { minBlockNumber, maxBlockNumber, blocks, setBlock } = useBlocks();

  const needMore = useMemo(() => maxBlockNumber && maxBlockNumber - minBlockNumber < 12, [
    maxBlockNumber,
    minBlockNumber,
  ]);

  const observe = useCallback(() => {
    if (apiService && minBlockNumber > 12 && minBlockNumber < Number.MAX_SAFE_INTEGER) {
      combineLatest([...new Array(10)].map((_, i) => apiService.queryBlockDetail(minBlockNumber - i)))
        .pipe(take(1))
        .subscribe(blocks => {
          for (const block of blocks) {
            setBlock(block);
          }
        });
    }
  }, [apiService, setBlock, minBlockNumber]);

  useLayoutEffect(() => {
    apiService?.subscribeNewHeads().subscribe(data => {
      setBlock(data);
    });
  }, [apiService, setBlock]);

  useLayoutEffect(() => {
    if (needMore) {
      observe();
    }
  }, [needMore, observe]);

  return (
    <div>
      {maxBlockNumber > 0 ? (
        Array.from(new Array(maxBlockNumber - minBlockNumber + 1)).map((_, index) => {
          const blockNumber = maxBlockNumber - index;
          return <BlockItem blockNumber={blockNumber} blockHash={blocks[blockNumber]?.blockHash} key={blockNumber} />;
        })
      ) : (
        <div className="blocks-load">
          <Spinner />
        </div>
      )}
      <IntersectionObserve rootMargin="320px" observe={observe} />
    </div>
  );
};

export default BlockList;
