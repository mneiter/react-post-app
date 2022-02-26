import { useMemo } from 'react';
import { getPageArray } from '../utils/pages';

export const usePagination = (totalPages) => {
  const pageArray = useMemo(
    () => getPageArray(totalPages),
    [totalPages],
  );
  return pageArray;
};
