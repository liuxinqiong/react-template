import { useEffect } from 'react';

export default function useDidMount(fn: () => void) {
  useEffect(() => fn && fn(), []);
}
