import { useEffect, useRef } from 'react';

export default function useDidMount(mountedFn: () => void) {
  const mountedFnRef = useRef<(() => void) | null>(null);
  mountedFnRef.current = mountedFn;
  useEffect(() => {
    if (mountedFnRef.current) {
      mountedFnRef.current();
    }
  }, [mountedFnRef]);
}
