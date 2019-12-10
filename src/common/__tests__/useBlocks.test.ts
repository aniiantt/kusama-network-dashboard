import { renderHook, act } from '@testing-library/react-hooks';

import { useBlocks } from '..';

describe('useApi test', () => {
  it('should be initial value', () => {
    const { result } = renderHook(() => useBlocks());
    expect(result.current.minBlockNumber).toBe(Number.MAX_SAFE_INTEGER);
    expect(result.current.maxBlockNumber).toBe(0);
    expect(result.current.blocks).toEqual({});
  });

  it('set blocks', () => {
    const { result } = renderHook(() => useBlocks());

    // add one
    act(() => {
      result.current.setBlock({
        blockHash: '0x1111',
        blockNumber: '50',
      });
    });

    expect(result.current.minBlockNumber).toBe(50);
    expect(result.current.maxBlockNumber).toBe(50);

    // add max
    act(() => {
      result.current.setBlock({
        blockHash: '0x1111',
        blockNumber: '100',
      });
    });

    expect(result.current.minBlockNumber).toBe(50);
    expect(result.current.maxBlockNumber).toBe(100);

    // add min
    act(() => {
      result.current.setBlock({
        blockHash: '0x1111',
        blockNumber: '1',
      });
    });

    expect(result.current.minBlockNumber).toBe(1);
    expect(result.current.maxBlockNumber).toBe(100);

    expect(result.current.blocks).toEqual({
      50: {
        blockHash: '0x1111',
      },
      100: {
        blockHash: '0x1111',
      },
      1: {
        blockHash: '0x1111',
      },
    });
  });
});
