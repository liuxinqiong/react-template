import type { ReactNode } from 'react';
import { Children } from 'react';

export function toArray(children: ReactNode) {
  const ret: ReactNode[] = [];
  Children.forEach(children, (item) => {
    ret.push(item);
  });
  return ret;
}
