import type { SetStateAction, Dispatch } from 'react';
import type React from 'react';
import { useState, useRef, useEffect } from 'react';

export function useStateRef<T>(
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>, React.MutableRefObject<T>] {
  const [value, setValue] = useState<T>(initialValue);
  const ref = useRef<T>(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return [value, setValue, ref];
}
