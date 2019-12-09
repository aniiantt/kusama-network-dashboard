import { useState, useLayoutEffect } from 'react';
import { Observable } from 'rxjs';

function useObservable<T>(observable$: Observable<T> | undefined): T | undefined;
function useObservable<T>(observable$: Observable<T> | undefined, initialValue: T): T;
function useObservable<T>(observable$: Observable<T> | undefined, initialValue?: T): T | undefined {
  const [value, update] = useState<T | undefined>(initialValue);

  useLayoutEffect(() => {
    const s = observable$?.subscribe(update);
    return () => s?.unsubscribe();
  }, [observable$]);

  return value;
}

export default useObservable;
