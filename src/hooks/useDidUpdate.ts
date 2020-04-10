import { useRef, useEffect } from 'react';

export default function useDidUpdate(fn: () => void, conditions: any[]) {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    // Cleanup effects when fn returns a function
    // eslint-disable-next-line consistent-return
    return fn && fn();
  }, conditions);
}
