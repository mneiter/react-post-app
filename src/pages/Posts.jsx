// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import PostService from '../api/PostService';
import PostFilter from '../components/Post/PostFilter';
import PostForm from '../components/Post/PostForm';
import PostList from '../components/Post/PostList';
import MyButton from '../components/UI/button/MyButton';
import MyLoader from '../components/UI/loader/MyLoader';
import MyModal from '../components/UI/modal/MyModal';
import { MyPagination } from '../components/UI/pagination/MyPagination';
import useFetching from '../hooks/useFetching';
import usePosts from '../hooks/usePosts';
import { getPageCount } from '../utils/pages';

import '../styles/App.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-shadow
  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const observer = useRef();
  const lastElement = useRef();

  useEffect(() => {
    if (isPostLoading) return;
    if (observer && observer.current) observer.current.disconnect();
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === lastElement.current && entry.isIntersecting && page < totalPages) {
          setTimeout(() => {
            setPage(page + 1);
          }, 1000);
        }
      });
    };

    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isPostLoading]);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setIsModalVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (p) => {
    setPage(p);
    fetchPosts(limit, p);
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setIsModalVisible(true)}>
        Create Post
      </MyButton>
      <MyModal visible={isModalVisible} setVisible={setIsModalVisible}>
        <PostForm createPost={createPost} />
      </MyModal>
      <PostFilter filetr={filter} setFilter={setFilter} />
      <hr style={{ margin: '15px 0' }} />
      {
        postError
        && (
        <h1>
          Occure an error $
          {postError}
        </h1>
        )
      }
      {
        isPostLoading
          && <div className="loader"><MyLoader /></div>
      }
      <PostList removePost={removePost} posts={sortedAndSearchedPosts} title="The list of posts" />
      <div ref={lastElement} />
      <MyPagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}
export default Posts;
