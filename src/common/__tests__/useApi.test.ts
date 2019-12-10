import { renderHook, act } from '@testing-library/react-hooks';

import { useApi } from '..';
import { ApiService } from '../../services';

describe('useApi test', () => {
  it('should be initial value', () => {
    const { result } = renderHook(() => useApi());
    expect(result.current.apiService).toBe(null);
    expect(result.current.isReady).toBe(false);
  });

  it('set isReady', () => {
    const { result } = renderHook(() => useApi());

    act(() => {
      result.current.setIsReady(true);
    });

    expect(result.current.isReady).toBe(true);
  });

  it('set apiService', () => {
    const { result } = renderHook(() => useApi());

    const api = {};

    act(() => {
      result.current.setApiService(api as ApiService);
    });

    expect(result.current.apiService).toBe(api);
  });
});
