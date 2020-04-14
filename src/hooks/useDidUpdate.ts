import { useRef, useEffect, EffectCallback, DependencyList } from 'react';

const useDidUpdate: typeof useEffect = (updatedFn: EffectCallback, deps?: DependencyList) => {
  const didMountRef = useRef(false);
  const updatedFnRef = useRef<Function | null>(null);
  updatedFnRef.current = updatedFn;

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    if (updatedFnRef.current) {
      // Cleanup effects when fn returns a function
      // eslint-disable-next-line consistent-return
      return updatedFnRef.current();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDidUpdate;
