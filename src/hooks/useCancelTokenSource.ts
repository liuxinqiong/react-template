import { useRef, useEffect, useCallback } from 'react';
import { CancelTokenSource } from 'axios';
import { CancelToken } from '@/utils/request';

export default function useCancelTokenSource() {
  const cancelTokenSource = useRef<CancelTokenSource>(CancelToken.source());
  const setCancelTokenSource = useCallback(() => {
    cancelTokenSource.current?.cancel('cancel');
    cancelTokenSource.current = CancelToken.source();
  }, [cancelTokenSource]);

  useEffect(
    () => () => {
      cancelTokenSource.current?.cancel('cancel');
    },
    [],
  );
  return [cancelTokenSource, setCancelTokenSource] as const;
}
