import { useEffect, useRef } from 'react';

export default function useDidMount(mountedFn: Function) {
  const mountedFnRef = useRef<Function | null>(null);
  mountedFnRef.current = mountedFn;
  useEffect(() => {
    if (mountedFnRef.current) {
      mountedFnRef.current();
    }
  }, [mountedFnRef]);
}
