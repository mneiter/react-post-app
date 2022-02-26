import React from 'react';
import { usePagination } from '../../../hooks/usePagination';
import cl from './MyPagination.module.css';

export function MyPagination({ totalPages, changePage, page }) {
  const pagesArray = usePagination(totalPages);
  return (
    <div className={cl.page__wrapper}>
      {
          pagesArray.map((p) => (
            <span key={p} onClick={() => changePage(p)} className={p === page ? `${cl.page} ${cl.current}` : cl.page}>
              {p}
            </span>
          ))
        }
    </div>
  );
}
