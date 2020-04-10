import { useEffect } from 'react';

export default function useWillUnMount(fn: () => void) {
  useEffect(() => () => fn && fn(), []);
}
