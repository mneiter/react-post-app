import { useMemo } from 'react';

const useSortedPosts = (posts, sort) => {
  const sorteadPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sorteadPosts;
};

const usePosts = (posts, sort, query) => {
  const sorteadPosts = useSortedPosts(posts, sort);

  // eslint-disable-next-line max-len
  const sortedAndSearchedPosts = useMemo(() => sorteadPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase())), [query, sorteadPosts]);

  return sortedAndSearchedPosts;
};

export default usePosts;
