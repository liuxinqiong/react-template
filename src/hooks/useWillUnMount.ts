import { useEffect, useRef } from 'react';

export default function useWillUnMount(unMountedFn: () => void) {
  const unMountedFnRef = useRef<(() => void) | null>(null);
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
