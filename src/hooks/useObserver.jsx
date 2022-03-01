import { useEffect, useRef } from 'react';

export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef();
  useEffect(() => {
    if (isLoading) return;
    if (observer && observer.current) observer.current.disconnect();
    const innerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === ref.current && entry.isIntersecting && canLoad) {
          callback();
        }
      });
    };

    observer.current = new IntersectionObserver(innerCallback);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
