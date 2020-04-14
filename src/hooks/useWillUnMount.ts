import { useEffect, useRef } from 'react';

export default function useWillUnMount(unMountedFn: Function) {
  const unMountedFnRef = useRef<Function | null>(null);
  unMountedFnRef.current = unMountedFn;
  useEffect(
    () => () => {
      if (unMountedFnRef.current) {
        unMountedFnRef.current();
      }
    },
    [unMountedFnRef],
  );
}
